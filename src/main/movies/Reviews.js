import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { getReviews } from './api.js'

class Reviews extends Component {
  constructor () {
    super()

    this.state = {
      reviews: null
    }
  }

  componentDidMount () {
    getReviews()
      .then(res => res.data.reviews.filter(review => review.movie.name === this.props.name))
      .then(filteredReviews => this.setState({ reviews: filteredReviews }))
      .catch(error =>
        console.error(error)
      )
  }

  render () {
    if (!this.state.reviews) {
      return <p>Loading..</p>
    }

    return (
      <div className='movie-reviews'>
        {this.state.reviews.map(review =>
          <Fragment key={review.id}>
            <p>{review.text_body}</p>
            <p>{review.user.email}</p>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Reviews)
