import { useEffect } from 'react'
import { CartStore, useCartStore } from '../../hooks'
import shallow from 'zustand/shallow'
import { Product } from '../../models'
import { ClipLoader } from 'react-spinners'
import { MovieCard } from '../../components/movie-card'
import { HomeContainer } from './styles'

const selectHomeState = (state: CartStore) =>
  [
    state.loadingInit,
    state.fetchMovies,
    state.products,
    state.totalQuantity,
  ] as const

export function Home() {
  const [loadingInit, fetchMovies, products, totalQuantity] = useCartStore(
    selectHomeState,
    shallow,
  )

  useEffect(() => {
    const getAllMovies = () => fetchMovies()
    if (totalQuantity === 0 && loadingInit === true) {
      getAllMovies()
    }
  }, [fetchMovies, loadingInit, totalQuantity])

  if (loadingInit) {
    return (
      <ClipLoader
        color="#FFF"
        cssOverride={{
          position: 'absolute',
          margin: 'auto',
          inset: 0,
        }}
        loading
        size={56}
        aria-label="Carregando os dados"
      />
    )
  }

  return (
    <HomeContainer>
      {products.map((product: Product) => (
        <MovieCard product={product} key={product.id} />
      ))}
    </HomeContainer>
  )
}
