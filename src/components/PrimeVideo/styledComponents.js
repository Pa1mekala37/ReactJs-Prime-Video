import styled from 'styled-components'

export const PrimeVideoContainer = styled.div`
  background-color: #000000;
  padding-bottom: 32px;
  min-height: 100vh;
`

export const Image = styled.img`
  width: 100%;
`

export const MoviesContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

export const MoviesHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
  line-height: 1.3;
  margin-top: 32px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
