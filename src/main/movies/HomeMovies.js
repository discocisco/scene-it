import React, { Component } from 'react'

import MovieThumbnail from './MovieThumbnail.js'
import { nowPlaying, getMovies, createMovie } from './api.js'
import messages from './messages.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class HomeMovies extends Component {
  constructor () {
    super()

    this.state = {
      movies: [],
      tmdbMovies: []
    }
  }

  componentDidMount () {
    const { alert } = this.props

    nowPlaying()
      .then(res => this.setState({ tmdbMovies: res.data.results }))
      .then(() => getMovies())
      .then(res => this.state.tmdbMovies.map(movie => {
        if (res.data.movies.some(title => title.name === movie.original_title)) {
          const movieObj = res.data.movies.find(title => title.name === movie.original_title)
          this.setState({ movies: [...this.state.movies, movieObj] })
        } else {
          createMovie({ name: movie.original_title, release_date: movie.release_date, poster: movie.poster_path })
            .then(res => this.setState({ movies: [...this.state.movies, res.data.movie] }))
        }
      }))
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
      <Container className='home-movies-wrapper'>
        <Row className='home-movies-title'>
          <h4>Now Playing:</h4>
        </Row>
        <Row>
          {movies.map(movie =>
            <MovieThumbnail
              key={movie.id}
              id={movie.id}
              name={movie.title}
              poster={movie.poster}/>)}
        </Row>
      </Container>
    )
  }
}

export default HomeMovies
