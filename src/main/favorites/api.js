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
