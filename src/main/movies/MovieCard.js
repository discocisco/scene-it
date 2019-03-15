import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Card from 'react-bootstrap/Card'

// bg={favorite ? 'danger' : 'dark'} text='white'

const MovieCard = ({ id, name, releaseDate, poster, favorite }) => (
  <div className='col-3'>
    <Card className='movie-card'>
      <Link to={'/movies/' + id}>
        <Card.Img className='movie-card-img' variant="top" src={poster} />
      </Link>
      <Card.Body>
        <Card.Title>{name} {favorite && '💜'}</Card.Title>
        <Link to={'/movies/' + id}>
          <Card.Text>See more..</Card.Text>
        </Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Released on {moment(releaseDate).format('ll')}</small>
      </Card.Footer>
    </Card>
  </div>
)

export default MovieCard
