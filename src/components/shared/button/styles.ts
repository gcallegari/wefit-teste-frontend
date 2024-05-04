import styled from 'styled-components'

interface StyledButtonProps {
  width: string
  fontSize: string
  active: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, active }) =>
    active ? theme.green : theme.blue};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.white};
  border-radius: 0.4rem;
  padding: 0 1.6rem;
  height: 4rem;
  text-transform: uppercase;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`
