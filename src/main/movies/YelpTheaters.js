import React, { Component } from 'react'

// import YelpCard from './YelpTheaters.js'

class YelpTheaters extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: this.props.search
    }
  }

  render () {
    return (
      <p>hello</p>
    )
  }
}

export default YelpTheaters
