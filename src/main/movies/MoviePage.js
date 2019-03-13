import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment'

import './MoviePage.scss'

import Reviews from './Reviews.js'
import { showMovie } from './api.js'
import { getFavorites, createFavorite, destroyFavorite } from '../favorites/api.js'
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
      user: props.user,
      favorites: [],
      isFavorite: false,
      favId: null
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

    if (this.props.user) {
      getFavorites(this.props.user.token)
        .then(res => {
          if (res.data.favorites.some(fav => fav.movie.id === Number(match.params.id))) {
            const foundIndex = res.data.favorites.findIndex(fav => fav.movie.id === Number(match.params.id))
            this.setState({ favorites: res.data.favorites, isFavorite: true, favId: res.data.favorites[foundIndex].id })
          } else {
            this.setState({ favorites: res.data.favorites })
          }
        })
        .catch(error => {
          console.error(error)
          alert(messages.getFavoritesFailure, 'danger')
        })
    }
  }

  addFav = () => {
    const { alert, match, user } = this.props
    createFavorite(match.params.id, user.token)
      .then(res => this.setState(
        { isFavorite: true,
          favId: res.data.favorite.id,
          favorites: [...this.state.favorites, res.data.favorite]
        }
      ))
      .catch(error => {
        console.error(error)
        alert(messages.createFavoriteFailure, 'danger')
      })
  }

  removeFav = () => {
    const { user } = this.props
    destroyFavorite(this.state.favId, user.token)
      .then(() => this.setState({
        isFavorite: false,
        favId: null,
        favorites: this.state.favorites.filter(fav => fav.movie.name === this.state.name)
      }))
      .catch(error => {
        console.error(error)
        alert(messages.destroyFavoriteFailure, 'danger')
      })
  }

  render () {
    return (
      <Fragment>
        <Jumbotron>
          <h1>{this.state.name}</h1>
          <hr className="my-4"></hr>
          <p>Released on {moment(this.state.releaseDate).format('LL')}</p>
          {this.state.user ? (this.state.isFavorite ? <button onClick={() => this.removeFav()}>Remove from Favorites</button> : <button onClick={this.addFav}>Add to Favorites</button>) : ''}
        </Jumbotron>
        <Container>
          <Row>
            <Col xs='8'>
              {this.state.user ? <Link to={'/movies/' + this.props.match.params.id + '/review-create'} params={{ movieId: this.props.match.params.id }}><button>Add review</button></Link> : ''}
              <Reviews name={this.state.name} user={this.state.user}/>
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
