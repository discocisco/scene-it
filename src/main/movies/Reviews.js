import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { getReviews, deleteReview } from './api.js'

class Reviews extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: this.props.user,
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

  removeReview = (id) => {
    deleteReview(id, this.state.user.token)
      .then(() => {
        const oldReviews = [...this.state.reviews]
        const index = oldReviews.findIndex(review => review.id === id)
        oldReviews.splice(index, 1)
        this.setState({ reviews: oldReviews })
      })
      .catch(error =>
        console.log(error)
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
            {this.state.user ? (this.state.user.email === review.user.email ? <button onClick={() => this.removeReview(review.id)}>Delete</button> : '') : ''}
            {this.state.user ? (this.state.user.email === review.user.email ? <Link to={`/reviews/${review.id}/edit`} params={{ movieId: review.movie.id, textBody: review.text_body }}><button>Edit</button></Link> : '') : ''}
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Reviews)
