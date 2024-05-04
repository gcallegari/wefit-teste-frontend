import {
  ProductQuantity,
  StyledProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductLabel,
  ProductInfo,
} from './styles'

import DeleteIcon from '@mui/icons-material/Delete'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Product } from '../../models'
import { CartStore, useCartStore } from '../../hooks'
import shallow from 'zustand/shallow'
import { formatCurrency } from '../../utils/format-currency'

interface ProductItemMobileProps {
  product: Product
}

const selectProductActions = (state: CartStore) =>
  [state.increment, state.decrement, state.removeFromCart] as const

export function ProductItemMobile({ product }: ProductItemMobileProps) {
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

      <ProductInfo>
        <div>
          <ProductTitle>{title}</ProductTitle>
          <div className="wrapper">
            <ProductPrice>
              {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </ProductPrice>
            <DeleteIcon
              aria-label="Deletar produto"
              role="button"
              onClick={() => removeFromCart({ id })}
            />
          </div>
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
              fontSize='medium'
              onClick={() => increment({ id })}
            />
          </ProductQuantity>
          <div>
            <ProductLabel>SUBTOTAL</ProductLabel>
            <ProductPrice>{formatCurrency(subtotal)}</ProductPrice>
          </div>
        </div>
      </ProductInfo>
    </StyledProductItem>
  )
}
