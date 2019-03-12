import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment'

import './MoviePage.scss'

import Reviews from './Reviews.js'
import { showMovie } from './api.js'
import messages from './messages.js'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MoviePage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: null,
      releaseDate: null,
      poster: null,
      user: props.user
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
          {this.state.user ? <Link to={'/movies/' + this.props.match.params.id + '/review-create'} params={{ movieId: this.props.match.params.id }}><button>Add review</button></Link> : ''}
        </Jumbotron>
        <Container>
          <Row>
            <Col xs='8'>
              <Reviews name={this.state.name}/>
            </Col>
            <Col xs='4'>
              <img className='movie-page-poster' src={this.state.poster}/>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default withRouter(MoviePage)
