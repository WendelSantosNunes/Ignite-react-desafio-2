import styled from 'styled-components'
import BackgroundImg from '../../../../assets/background.png'

export const IntroContainer = styled.main`
  width: 100%;
  background-image: url(${BackgroundImg});
  background-size: cover;

  padding-bottom: 5.75rem;

  .intro {
    width: 100%;
    max-width: 70rem;

    margin: 0 auto;

    display: flex;
    align-items: center;

    div > img {
      max-width: 29.75rem;
      width: 100%;
    }

    @media (max-width: 60rem) {
      flex-direction: column;
      justify-content: center;

      div > img {
        margin-top: 20px;
        width: 80%;
      }
    }

    @media (max-width: 37.5rem) {
      text-align: center;
    }
  }

  @media (max-width: 37.5rem) {
    padding-bottom: 0;
  }
`

export const IntroInfo = styled.div`
  margin: auto 0.625rem;
  max-width: 36.75rem;
  width: 100%;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-title']};
  }

  & > p {
    font-size: 1.25rem;

    margin: 1rem 0 4.125rem 0;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoList = styled.ul`
  list-style: none;

  display: flex;
  flex-wrap: wrap;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  li * {
    border-radius: 62.5rem;
    padding: 8px;
  }

  div:nth-child(1) {
    li:nth-child(1) svg {
      color: ${(props) => props.theme['background-regular']};
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    li:nth-child(2) svg {
      color: ${(props) => props.theme['background-regular']};
      background-color: ${(props) => props.theme['yellow-regular']};
    }
  }
  div:nth-child(2) {
    li:nth-child(1) svg {
      color: ${(props) => props.theme['background-regular']};
      background-color: ${(props) => props.theme['base-text']};
    }

    li:nth-child(2) svg {
      color: ${(props) => props.theme['background-regular']};
      background-color: ${(props) => props.theme['purple-regular']};
    }
  }

  @media (max-width: 37.5rem) {
    justify-content: center;

    li {
      display: block;
    }
  }
`
