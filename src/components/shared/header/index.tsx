import {
  ButtonCart,
  ButtonCartLabel,
  HeaderContainer,
  ItemCounter,
  Title,
} from './styles'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useNavigate } from 'react-router-dom'
import { useCartStore, CartStore } from '../../../hooks'

export function Header() {
  const navigate = useNavigate()
  const totalQuantity = useCartStore((state: CartStore) => state.totalQuantity)
  const itemPlural = totalQuantity === 1 ? 'item' : 'items'

  return (
    <HeaderContainer>
      <Title> WeMovies </Title>

      <ButtonCart onClick={() => navigate('/cart')}>
        <div>
          <ButtonCartLabel> Meu Carrinho </ButtonCartLabel>
          <ItemCounter>
            {totalQuantity} {itemPlural}
          </ItemCounter>
        </div>
        <ShoppingBasketIcon />
      </ButtonCart>
    </HeaderContainer>
  )
}
