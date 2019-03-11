import React, { Component } from 'react'

import MovieCard from './MovieCard.js'
import { getMovies } from './api.js'
import messages from './messages.js'

class Movies extends Component {
  constructor () {
    super()

    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    const { alert } = this.props

    getMovies()
      .then(res => this.setState({ movies: res.data.movies }))
      .catch(error => {
        console.error(error)
        alert(messages.getMoviesFailure, 'danger')
      })
  }

  render () {
    const { movies } = this.state

    if (!movies) {
      return <p>Loading movies, sit tight</p>
    }

    return (
      <div className='row'>
        {movies.map(movie =>
          <MovieCard
            key={movie.id}
            id={movie.id}
            name={movie.name}
            releaseDate={movie.release_date}
            poster={movie.poster}
          />)}
      </div>
    )
  }
}

export default Movies
