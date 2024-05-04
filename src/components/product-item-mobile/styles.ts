import styled from 'styled-components'

export const StyledProductItem = styled.li`
  width: 100%;
  height: 8.2rem;
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  .MuiSvgIcon-root {
    color: ${(props) => props.theme.blue};
    height: 1.8rem;
    width: 1.8rem;
  }
`

export const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    cursor: pointer;
  }

  .wrapper {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
`

export const ProductImage = styled.figure`
  width: 6.4rem;
  height: 100%;
`

export const ProductTitle = styled.h2`
  font-size: 1.4rem;
  line-height: 2rem;
`

export const ProductPrice = styled.span`
  font-size: 1.6rem;
`

export const ProductLabel = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.grey};
  text-transform: uppercase;
  line-height: 1.6rem;
  text-align: right;
`

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: 0.1rem solid ${(props) => props.theme.lightGrey};
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-weight: 400;
    padding-left: 1.2rem;
    margin: 0 1.1rem;
    width: 6rem;
    height: 2.6rem;
  }
`
