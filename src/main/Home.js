import React, { Component, Fragment } from 'react'

import HomeMovies from './movies/HomeMovies.js'
import carousel1 from '../img/carousel_1.jpg'
import carousel2 from '../img/carousel_2.jpg'
import carousel3 from '../img/carousel_3.jpg'

import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }
  }

  render () {
    return (
      <Fragment>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel3}
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Save movies as your favorite</h3>
              <p>No limit to favorite movies for signed in users!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>{'Review what you\'ve watched!'}</h3>
              <p>Make sure to sign in if you want to leave a review.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Interact with others!</h3>
              <p>Everyone can read successfully submitted reviews! Welcome to our community.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <HomeMovies />
      </Fragment>
    )
  }
}

export default Home
