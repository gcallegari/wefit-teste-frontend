import styled from 'styled-components'

export const StyledProductItem = styled.li`
  width: 100%;
  height: 11.4rem;
  display: grid;
  grid-template-columns: 10rem 1fr 32rem 1fr 18rem;
  align-items: center;
  grid-gap: 2rem;

  .MuiSvgIcon-root {
    margin-left: 16rem;
    color: ${(props) => props.theme.blue};
    height: 2.4rem;
    width: 2.4rem;
  }
`

export const ProductImage = styled.figure`
  width: 8.9rem;
  height: 100%;
`

export const ProductTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`

export const ProductPrice = styled.span`
  font-size: 1.6rem;
`

export const ProductSubtotal = styled.span`
  font-size: 1.6rem;
`

export const ProductLabel = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.grey};
  text-transform: uppercase;
`

export const ProductQuantity = styled.div`
  display: flex;
  font-weight: 400;
  align-items: center;

  .MuiSvgIcon-root {
    margin-left: 0 !important;
    color: ${(props) => props.theme.blue};
    height: 2.4rem;
    width: 2.4rem;
  }

  input {
    border: 0.1rem solid ${(props) => props.theme.lightGrey};
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-weight: 400;
    padding-left: 1.2rem;
    margin: 0 1.1rem;
    width: 6.2rem;
    height: 2.6rem;
  }
`
