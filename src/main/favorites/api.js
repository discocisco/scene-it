import apiUrl from '../../apiConfig'
import axios from 'axios'

export const getFavorites = (token) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/favorites',
    headers: {
      'Authorization': `Token token=${token}`
    }
  })
}

export const createFavorite = (id, token) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/favorites',
    headers: {
      'Authorization': `Token token=${token}`
    },
    data: {
      favorite: {
        movie_id: id
      }
    }
  })
}

export const destroyFavorite = (id, token) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/favorites/' + id,
    headers: {
      'Authorization': `Token token=${token}`
    }
  })
}
