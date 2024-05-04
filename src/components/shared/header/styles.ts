import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
  margin-bottom: 4.4rem;
  
  @media (max-width: 500px) {
    margin-bottom: 2rem;
  }
`

export const Title = styled.p`
  font-size: 2rem;
  color: ${(props) => props.theme.white};
`

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  transition: filter 0.2s;

  svg{
    color: ${(props) => props.theme.white};
    height: 2.4rem;
    width: 2.4rem;
  }
  
  &:hover {
    filter: brightness(0.9);
  }
`

export const ButtonCartLabel = styled.a`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.90rem;
  color: ${(props) => props.theme.white};
  
  @media (max-width: 500px) {
    display: none;
  }
`

export const ItemCounter = styled.p`
  font-size: 1.2rem;
  text-align: right;
  color: ${(props) => props.theme.grey};
  line-height: 1.60rem;
  font-weight: 600;
`
