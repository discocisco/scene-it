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

export const showReview = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/reviews/' + id
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

export const updateReview = (id, token, textBody) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/reviews/' + id,
    headers: {
      'Authorization': `Token token=${token}`
    },
    data: {
      review: {
        text_body: textBody
      }
    }
  })
}

export const deleteReview = (id, token) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/reviews/' + id,
    headers: {
      'Authorization': `Token token=${token}`
    }
  })
}
