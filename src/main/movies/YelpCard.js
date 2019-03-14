import React from 'react'
import YelpLogo from '../../img/Yelp_trademark_RGB_outline.png'

const YelpCard = ({ name, imageUrl, isClosed, url, reviewCount, rating, displayAddress, displayPhone }) => (
  <div className='yelp-card'>
    <img className='yelp-card-img' src={imageUrl} alt={`${name} yelp image`}/>
    <div className='yelp-card-info'>
      <div className='yelp-card-details'>
        <div className='yelp-theater-name'>
          <h3>{name}</h3>
        </div>
        <div className='yelp-card-rating'>
          <a href={url} target='_blank' rel='noopener noreferrer'><img className='yelp-logo' src={YelpLogo} /></a>
          <div className={`yelp-theater-rating rating-${rating}`}></div>
          <p className='yelp-theater-reviews'>Based on {reviewCount} Reviews</p>
        </div>
      </div>
      <div className='yelp-theater-contact'>
        <h5 className='yelp-theater-address'>{displayAddress[0]}</h5>
        <h5 className='yelp-theater-address'>{displayAddress[1]}</h5>
        <p className='yelp-theater-phone'>{displayPhone}</p>
      </div>
    </div>
  </div>
)

export default YelpCard
