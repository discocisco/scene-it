import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { findTheaters } from './api.js'

import YelpCard from './YelpCard.js'

class FindTheater extends Component {
  constructor () {
    super()

    this.state = {
      search: '',
      businesses: []
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  submitSearch = event => {
    event.preventDefault()
    findTheaters(this.state.search)
      .then(res => this.setState({ businesses: res.data.businesses }))
      .catch(console.error)
  }

  render () {
    return (
      <div className='yelp-container'>
        <form className='find-theater-form' onSubmit={this.submitSearch}>
          <h3>Find a theater near you!</h3>
          <input
            required
            name='search'
            value={this.state.search}
            type='text'
            placeholder='Enter a location'
            onChange={this.handleChange} />
          <button type='submit'>Search</button>
        </form>
        <div className='found-theaters'>
          {this.state.businesses.map(theater =>
            <YelpCard key={theater.id}
              name={theater.name}
              imageUrl={theater.image_url}
              isClosed={theater.is_closed}
              url={theater.url}
              reviewCount={theater.review_count}
              rating={theater.rating.toString().replace(/\./g, '')}
              displayAddress={theater.location.display_address}
              displayPhone={theater.display_phone}
            />)}
        </div>
      </div>
    )
  }
}

export default withRouter(FindTheater)
