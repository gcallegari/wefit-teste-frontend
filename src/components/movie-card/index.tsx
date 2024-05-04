import {
  MovieQuantity,
  StyledMovieCard,
  MovieImage,
  MovieTitle,
  MoviePrice,
} from './styles'
import { Button } from '../shared/button'

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Product } from '../../models'
import { CartStore, useCartStore } from '../../hooks'
import { formatCurrency } from '../../utils/format-currency'

interface MovieCardProps {
  product: Omit<Product, 'subtotal'>
}

export function MovieCard({ product }: MovieCardProps) {
  const addToCart = useCartStore((state: CartStore) => state.addToCart)
  const { title, price, image, quantity, id } = product
  const buttonText = quantity > 0 ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'

  return (
    <StyledMovieCard>
      <MovieImage>
        <img src={image} alt={`${title}`} />
      </MovieImage>

      <MovieTitle>{title}</MovieTitle>
      <MoviePrice>{formatCurrency(price)}</MoviePrice>
      <Button onClick={() => addToCart({ id })} active={quantity > 0}>
        <AddShoppingCartIcon />
        <MovieQuantity> {quantity} </MovieQuantity>
        <p> {buttonText}</p>
      </Button>
    </StyledMovieCard>
  )
}
