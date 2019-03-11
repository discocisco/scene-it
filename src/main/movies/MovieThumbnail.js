import React from 'react'

const MovieThumbnail = ({ id, name, poster }) => (
  <div className='home-img-thumbnail'>
    <img src={poster} className='img-thumbnail' />
  </div>
)

export default MovieThumbnail
