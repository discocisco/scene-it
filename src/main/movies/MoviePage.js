import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { showMovie } from './api.js'
import messages from './messages.js'

class MoviePage extends Component {
  constructor () {
    super()

    this.state = {
      name: null,
      releaseDate: null,
      poster: null
    }
  }

  componentDidMount () {
    const { alert, match } = this.props

    showMovie(match.params.id)
      .then(res => this.setState(
        { name: res.data.movie.name,
          releaseDate: res.data.movie.release_date,
          poster: res.data.movie.poster
        }))
      .catch(error => {
        console.error(error)
        alert(messages.showMovieFailure, 'danger')
      })
  }

  render () {
    return (
      <Fragment>
        <h1>{this.state.name}</h1>
        <p>{this.state.releaseDate}</p>
      </Fragment>
    )
  }
}

export default withRouter(MoviePage)
