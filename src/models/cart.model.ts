import type { Movie } from './movie.model'

export interface Product extends Movie {
  quantity: number
  subtotal: number
}

export interface CartState {
  loadingInit: boolean
  products: Product[]
  totalQuantity: number
  totalValue: number
}
