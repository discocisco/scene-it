import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

import Reviews from './Reviews.js'
import { showMovie } from './api.js'
import messages from './messages.js'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <Jumbotron>
          <h1>{this.state.name}</h1>
          <hr className="my-4"></hr>
          <p>Released on {moment(this.state.releaseDate).format('LL')}</p>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs='8'>
              <Reviews name={this.state.name}/>
            </Col>
            <Col xs='4'>
              <img src={this.state.poster}/>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default withRouter(MoviePage)
