import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { showReview, updateReview } from './api.js'

class ReviewEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: props.match.params.id,
      textBody: '',
      movieId: '',
      user: props.user
    }
  }

  componentDidMount () {
    showReview(this.state.id)
      .then(res => this.setState({ textBody: res.data.review.text_body, movieId: res.data.review.movie_id }))
      .catch(console.error)
  }

  editReview = (event) => {
    const { history } = this.props
    event.preventDefault()
    updateReview(this.state.id, this.state.user.token, this.state.textBody)
      .then(res => history.push('/movies/' + res.data.review.movie.id))
      .catch(console.error)
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  render () {
    return (
      <form className='review-form' onSubmit={this.editReview}>
        <input required name='textBody' type='text' value={this.state.textBody} onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default withRouter(ReviewEdit)
