import create from 'zustand'
import { CartState, Movie, Product } from '../models'
import produce from 'immer'
import { MovieService } from '../services/movie.service'

type PayloadID = {
  id: number
}

type CartActions = {
  fetchMovies: () => Promise<void>
  addToCart: (payload: PayloadID) => void
  removeFromCart: (payload: PayloadID) => void
  increment: (payload: PayloadID) => void
  decrement: (payload: PayloadID) => void
  resetCart: () => void
}

export type CartStore = CartActions & CartState

const initialState: CartState = {
  loadingInit: true,
  products: [],
  totalValue: 0,
  totalQuantity: 0,
}

export const useCartStore = create<CartStore>((set, get) => ({
  ...initialState,
  fetchMovies: async () => {
    const response = await MovieService.getAll()
    await timeout(1200)
    const products = adapter(response.data)

    set((state) => ({
      ...state,
      products,
      loadingInit: false,
    }))
  },
  addToCart: ({ id }: PayloadID) => {
    set(
      produce<CartStore>((draft) => {
        const products = draft.products
        const target = findProduct(products, id)

        draft.totalQuantity = draft.totalQuantity + 1

        target.quantity = target.quantity + 1
        target.subtotal = target.quantity * target.price

        draft.totalValue = products.reduce(
          (acc, product) => acc + product.subtotal,
          0,
        )
      }),
    )
  },
  removeFromCart: ({ id }: PayloadID) => {
    set(
      produce<CartStore>((draft) => {
        const products = draft.products
        const target = findProduct(products, id)

        draft.totalQuantity = draft.totalQuantity - target.quantity

        target.quantity = 0
        target.subtotal = 0

        draft.totalValue = products.reduce(
          (acc, product) => acc + product.subtotal,
          0,
        )
      }),
    )
  },
  increment: ({ id }: PayloadID) => {
    set(
      produce<CartStore>((draft) => {
        const products = draft.products
        const target = findProduct(products, id)

        draft.totalQuantity = draft.totalQuantity + 1

        target.quantity = target.quantity + 1
        target.subtotal = target.quantity * target.price

        draft.totalValue = products.reduce(
          (acc, product) => acc + product.subtotal,
          0,
        )
      }),
    )
  },
  decrement: ({ id }: PayloadID) => {
    set(
      produce<CartStore>((draft) => {
        const products = draft.products
        const target = findProduct(products, id)
        draft.totalQuantity = draft.totalQuantity - 1

        target.quantity = target.quantity - 1
        target.subtotal = target.quantity * target.price

        draft.totalValue = draft.products.reduce(
          (acc, product) => acc + product.subtotal,
          0,
        )
      }),
    )
  },
  resetCart: () => {
    set({ ...initialState })
  },
}))

function adapter(movies: Movie[]): Product[] {
  return movies
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((movie: Movie) => ({
      ...movie,
      quantity: 0,
      subtotal: 0,
    }))
}

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function findProduct(products: Product[], id: number) {
  return products[products.findIndex((product) => product.id === id)]
}
