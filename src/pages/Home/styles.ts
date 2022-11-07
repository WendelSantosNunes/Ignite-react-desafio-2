import styled from 'styled-components'
import BackgroundImg from '../../assets/background.png'

export const MainContainer = styled.main`
  width: 100%;
  height: 34rem;
  background-image: url(${BackgroundImg});

  .intro {
    width: 100%;
    max-width: 70rem;

    margin: 5.75rem auto;

    display: flex;
    /* flex-wrap: wrap; */

    div > img {
      max-width: 29.75rem;
      width: 100%;
    }
  }
`

export const IntroInfo = styled.div`
  margin: auto 0.625rem;
  max-width: 36.75rem;
  width: 100%;

  h1 {
    font-size: 3rem;
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
`
