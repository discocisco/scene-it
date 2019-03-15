import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createReview } from './api.js'

class ReviewCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movieId: props.match.params.id,
      textBody: ''
    }
  }

  addReview = (event) => {
    const { history } = this.props
    event.preventDefault()
    createReview(this.state.movieId, this.props.user.token, this.state.textBody)
      .then(() => history.push('/movies/' + this.state.movieId))
      .catch(console.error)
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  render () {
    return (
      <form className='review-form' onSubmit={this.addReview}>
        <input required name='textBody' type='text' value={this.state.textBody} placeholder='Add your review here' onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default withRouter(ReviewCreate)
