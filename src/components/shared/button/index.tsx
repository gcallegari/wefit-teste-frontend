import { ReactNode, ReactElement, ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactElement
  width?: string
  fontSize?: string
  active?: boolean
}

export function Button({
  width = '100%',
  fontSize = '1.2rem',
  active = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton active={active} width={width} fontSize={fontSize} {...rest}>
      {children}
    </StyledButton>
  )
}
