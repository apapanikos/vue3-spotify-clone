import axios, { type AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN
  }
})
export default apiClient
