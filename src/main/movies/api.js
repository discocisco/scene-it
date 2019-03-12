import apiUrl from '../../apiConfig'
import axios from 'axios'

export const getMovies = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/movies'
  })
}

export const showMovie = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/movies/' + id
  })
}

export const getReviews = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/reviews'
  })
}

export const createReview = (id, token, textBody) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/reviews',
    headers: {
      'Authorization': `Token token=${token}`
    },
    data: {
      review: {
        text_body: textBody,
        movie_id: id
      }
    }
  })
}
