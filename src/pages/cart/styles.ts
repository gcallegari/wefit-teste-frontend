import styled from 'styled-components'

export const CartContainer = styled.section`
  max-width: 100%;
  width: calc(100vw - 3.2rem);
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.4rem;
  gap: 2rem;
  
  @media (max-width: 500px) {
    padding: 1.6rem;
    flex-grow: 1;
    gap: 1.6rem;
  }
`

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (max-width: 500px) {
    flex-grow: 1;
  }
`
export const Divider = styled.div`
  background-color: ${(props) => props.theme.grey};
  height: 0.1rem;
  width: 100%;
`
export const CartTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  padding-left: 0.25rem;
  font-size: 2.4rem;
  padding-right: 1.5rem;

  @media (max-width: 500px) {
    width: 100%;
    order: 0;
    justify-content: flex-end;
  }
`

export const Label = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.grey};
  text-transform: uppercase;
`

export const CartHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 15rem 1fr 29rem 1fr 29rem;
  align-items: center;
  grid-gap: 5.2rem;
`

export const CartFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    gap: 1.6rem;
    flex-direction: column;
    button {
      width: 100%;
      order: 1;
    }
  }
`
