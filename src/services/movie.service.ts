import { AxiosPromise } from 'axios'
import { http } from '../config'
import { MoviesApi } from '../models'

interface MovieHttpRepository {
  getAll: () => AxiosPromise<MoviesApi>
}

export const MovieService: MovieHttpRepository = {
  getAll: () => http.get(`/products`),
}
