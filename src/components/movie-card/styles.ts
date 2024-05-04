import styled from 'styled-components'

export const StyledMovieCard = styled.li`
  max-width: 30.5rem;
  width: calc(100vw - 3.2rem);
  height: 30.9rem;
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem;
  
  @media (max-width: 380px) {
    max-width: calc(100vw - 3.2rem);
  }
`

export const MovieImage = styled.figure`
  width: 14.7rem;
  height: 18.8rem;
`

export const MovieTitle = styled.p`
  margin-bottom: -0.4rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.lightPrimary};
`

export const MoviePrice = styled.span`
  font-size: 1.6rem;
`

export const AddMovieButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.blue};
  font-size: 1.2rem;
  color: ${(props) => props.theme.white};
  border-radius: 0.4rem;
  padding: 0 1.6rem;
  height: 4rem;

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }

  span {
    font-weight: 400;
    display: block;
    margin-left: 0.4rem;
    margin-right: 1rem;
  }
`

export const MovieQuantity = styled.span`
  font-weight: 400;
  display: block;
  margin-left: 0.4rem;
  margin-right: 1rem;
`
