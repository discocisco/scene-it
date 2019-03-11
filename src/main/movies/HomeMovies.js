import React, { Component } from 'react'

import MovieThumbnail from './MovieThumbnail.js'
import { getMovies } from './api.js'
import messages from './messages.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class HomeMovies extends Component {
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
      <Container>
        <Row>
          {movies.map(movie =>
            <MovieThumbnail
              key={movie.id}
              id={movie.id}
              name={movie.name}
              poster={movie.poster}/>)}
        </Row>
      </Container>
    )
  }
}

export default HomeMovies
