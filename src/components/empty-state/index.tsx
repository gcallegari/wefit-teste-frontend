import { useNavigate } from 'react-router-dom'
import { EmptyStateContainer, Title, Figure } from './styles'
import { Button } from '../shared/button'
import emptyStateImage from '../../assets/empty-state.svg'
import allDoneImage from '../../assets/all-done.svg'

type TEmptyStateType = 'success' | 'empty'
interface IEmptyStateAttributes {
  title: string
  src: string
  label: string
}

const composeState: Record<TEmptyStateType, IEmptyStateAttributes> = {
  empty: {
    title: 'Parece que não há nada por aqui :(',
    src: emptyStateImage,
    label: "Recarregar página",
  },
  success: {
    title: 'Compra realizada com sucesso!',
    src: allDoneImage,
    label: "Voltar",
  },
}

export interface EmptyStateProps {
  emptyStateType: TEmptyStateType
}

export function EmptyState({ emptyStateType }: EmptyStateProps) {
  const navigate = useNavigate()

  return (
    <EmptyStateContainer>
      <Title> {composeState[emptyStateType].title} </Title>
      <div>
        <Figure>
          <img src={composeState[emptyStateType].src} alt="Carrinho vazio" />
        </Figure>
      </div>
      <Button onClick={() => navigate('/')}>
        {composeState[emptyStateType].label}
      </Button>
    </EmptyStateContainer>
  )
}
