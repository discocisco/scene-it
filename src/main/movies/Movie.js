import React from 'react'

import Card from 'react-bootstrap/Card'

const Movie = ({ id, name, releaseDate, poster }) => (
  <div className='col-3'>
    <Card bg='dark' text='white'>
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>See more..</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Released on {releaseDate}</small>
      </Card.Footer>
    </Card>
  </div>
)

export default Movie
