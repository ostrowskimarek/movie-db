import React from 'react'

class MovieRow extends React.Component {
  viewMovie(){
    const url ="https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }
    render() {
        return  <table id="movietable" key={this.props.movie.id}>
           <tbody>
             <tr>
               <td>
                 <img id="posterek" alt="poster" src={this.props.movie.poster_src} />
               </td>
           <td class="table-data">
             <h3>{this.props.movie.title}</h3>
                <p className="paragraph" id="overview">{this.props.movie.overview}</p>
                <input id="btn-view" type="button" onClick={this.viewMovie.bind(this)} value="View movie"/>
              </td>
             </tr>
           </tbody>
        </table>
    }
}

export default MovieRow