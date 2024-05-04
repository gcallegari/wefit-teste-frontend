import {
  ProductQuantity,
  StyledProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from './styles'

import DeleteIcon from '@mui/icons-material/Delete'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Product } from '../../models'
import { CartStore, useCartStore } from '../../hooks'
import shallow from 'zustand/shallow'
import { formatCurrency } from '../../utils/format-currency'

interface ProductItemDesktopProps {
  product: Product
}

const selectProductActions = (state: CartStore) =>
  [state.increment, state.decrement, state.removeFromCart] as const

export function ProductItemDesktop({ product }: ProductItemDesktopProps) {
  const { title, price, quantity, image, id, subtotal } = product
  const [increment, decrement, removeFromCart] = useCartStore(
    selectProductActions,
    shallow,
  )

  return (
    <StyledProductItem>
      <ProductImage>
        <img src={image} alt={`DVD da ${title}`} />
      </ProductImage>

      <div>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </ProductPrice>
      </div>

      <div>
        <ProductQuantity>
          <RemoveCircleOutlineIcon
            aria-label="Diminuir um produto"
            role="button"
            onClick={() => quantity - 1 > 0 && decrement({ id })}
          />
          <input
            name="productQuantity"
            type="number"
            readOnly
            value={quantity}
          />
          <AddCircleOutlineIcon
            aria-label="Adicionar um produto"
            role="button"
            onClick={() => increment({ id })}
          />
        </ProductQuantity>
      </div>

      <ProductPrice>{formatCurrency(subtotal)}</ProductPrice>

      <DeleteIcon
        fontSize='large'
        role="button"
        onClick={() => removeFromCart({ id })}
      />
    </StyledProductItem>
  )
}
