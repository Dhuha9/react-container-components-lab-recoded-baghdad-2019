import React from 'react'


let MovieReviews = ({ reviews }) =>

      <ul className="review-list">{reviews ? reviews.map(review =>{
             return <li className='review'>{review.display_title}</li>}) : null}
      </ul>

export default MovieReviews