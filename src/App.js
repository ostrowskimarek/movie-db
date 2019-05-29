import React, {Component} from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component { 
  constructor(props){
    super(props)
    this.state ={}

    // const movies = [
    //   {id: 0, poster_src:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6260/6260224_so.jpg", title: " The Avengers", overview:"DESTASASDASDASDADASDADSAS DESCRIPTION"},
    //   {id: 1, poster_src:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg", title: "Avengers Infinity War ", overview:"DESTASASDASDASDADASDADSAS DESCRIPTION 2"},
    // ]

    // var movieRows = []
    // movies.forEach((movie)=> {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })

    // this.state={rows:movieRows}

    this.performSearch("a")
  }

    performSearch(searchTitle) {
      console.log("PERFORM SEARCH")
      const urlString = "https://api.themoviedb.org/3/search/movie?api_key=8268d9138fb7a51533dd90191e196395&query=" + searchTitle
      $.ajax({
        url:urlString,
        success: (searchResults) => {
          console.log("Mamy dane pobrane")
          console.log(searchResults)
          const results = searchResults.results
           //console.log(results[0])
           var movieRows =[]
           results.forEach((movie) => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            // console.log(movie.poster_path)
            const movieRow = <MovieRow key={movie.id} movie={movie}/>
            movieRows.push(movieRow)
          })
  
          this.setState({rows: movieRows})
        },
        error: (xhr, status, err) => {
          console.error("Failed to fetch data")
        }
      })
    }

    searchChangeHandler(e) {
      console.log(e.target.value)
      const boundObject = this
      const searchTitle = e.target.value
      boundObject.performSearch(searchTitle)
    }
  render() {
  return (
    <div className="App">

      <table className="titleBar">
        <tbodby>
          <tr>
            <td>
              <img alt="app icon" width="60" src="pobrane1.png"/>
            </td>
            <td>
              <h1>Movies Searcher</h1>
            </td>
          </tr>
        </tbodby>
      </table>


    <input id="input" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter the title"/>

      {this.state.rows}

    </div>
  );
}
}
export default App;
