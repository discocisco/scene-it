import React from 'react'
import { Link } from 'react-router-dom'

const MovieThumbnail = ({ id, name, poster }) => (
  <div className='home-img-thumbnail'>
    <Link to={'/movies/' + id}>
      <img src={poster.includes('http') ? poster : `https://image.tmdb.org/t/p/w500${poster}`} className='img-thumbnail' />
    </Link>
  </div>
)

export default MovieThumbnail
