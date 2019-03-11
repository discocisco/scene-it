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
