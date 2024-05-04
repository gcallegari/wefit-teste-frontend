import styled from 'styled-components'

export const EmptyStateContainer = styled.section`
  max-width: 100%;
  width: calc(100vw - 3.2rem);
  border-radius: 0.4rem;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 6.4rem 0;
  gap: 3.6rem;

  > button {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.60rem;
    text-align: center;
    text-transform: none;
    width: 18rem;
  }

  @media (max-width: 320px) {
   padding: 50px;
   height: 85%;
  }

  img {
    object-fit: cover;
    object-position: center;
    height: 22rem;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 2.7rem;
  text-align: center;
  @media (max-width: 300px) {
    width: 20rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
`

export const Figure = styled.div`
  margin: 0 auto;

  @media (max-width: 320px) {
    object-fit: cover;
    object-position: center;
  }
`
