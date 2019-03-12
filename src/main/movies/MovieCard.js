import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Card from 'react-bootstrap/Card'

const MovieCard = ({ id, name, releaseDate, poster }) => (
  <div className='col-3'>
    <Card bg='dark' text='white'>
      <Link to={'/movies/' + id}>
        <Card.Img variant="top" src={poster} />
      </Link>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
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
