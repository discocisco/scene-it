import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

import { getMovies, searchMovie, createMovie } from './api.js'
import messages from './messages.js'

class SearchMovie extends Component {
  constructor () {
    super()

    this.state = {
      search: '',
      movies: [],
      results: []
    }
  }

  componentDidMount () {
    getMovies()
      .then(res => this.setState({ movies: res.data.movies }))
      .catch(error => {
        console.error(error)
      })
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  submitSearch = event => {
    event.preventDefault()
    searchMovie(this.state.search)
      .then(res => this.setState({ results: res.data.results, search: '' }))
      .catch(error => {
        console.error(error)
        this.setState({ search: '' })
      })
  }

  selectMovie = (movie) => {
    const { alert, history } = this.props

    if (this.state.movies.some(film => film.name === movie.original_title)) {
      const foundMovie = this.state.movies.find(film => film.name === movie.original_title)
      history.push('/movies/' + foundMovie.id)
    } else {
      const movieObj = {
        name: movie.original_title,
        release_date: movie.release_date,
        poster: movie.poster_path }

      createMovie(movieObj)
        .then(res => history.push('/movies/' + res.data.movie.id))
        .catch(error => {
          console.error(error)
          this.setState({ search: '' })
          alert(messages.signUpFailure, 'danger')
        })
    }
  }

  render () {
    const { results } = this.state

    return (
      <div className='search-movie-container'>
        <form className='search-movie-form' onSubmit={this.submitSearch}>
          <h3>{'Please enter a movie title:'}</h3>
          <input
            required
            name='search'
            value={this.state.search}
            type='text'
            placeholder='Enter a movie title'
            onChange={this.handleChange} />
          <button type='submit'>Search</button>
        </form>
        <div className='found-movies row'>
          {results.map(movie =>
            <div key={movie.id} className='col-3'>
              <Card className='movie-card'>
                <Card.Img className='movie-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Card.Body>
                  <Card.Title>{movie.original_title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  <button onClick={() => this.selectMovie(movie)}>Select</button>
                </Card.Footer>
              </Card>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(SearchMovie)
