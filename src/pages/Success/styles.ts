import styled from 'styled-components'

export const ContainerComfirme = styled.div`
  width: 100%;
  max-width: 71.25rem;

  margin: 0 auto;

  & > div {
    margin: 20px;
  }

  h3 {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Baloo 2', cursive;
  }

  .subTitle {
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 2.5rem;
  }

  .info {
    display: flex;

    > div {
      border: 1px solid red;
      border-radius: 6px 36px 6px 36px;
      padding: 2.5rem 0 2rem 2.5rem;

      max-width: 32.875rem;
      width: 100%;

      div {
        display: flex;
        align-items: center;

        margin-bottom: 2rem;
      }
    }
  }

  svg {
    color: ${(props) => props.theme['background-regular']};
    padding: 8px;
    border-radius: 1000px;

    margin-right: 0.75rem;
  }

  .location {
    svg {
      background-color: ${(props) => props.theme['purple-regular']};
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: red;
    }
  }

  .time {
    svg {
      background-color: ${(props) => props.theme['yellow-regular']};
    }
  }

  .dolar {
    svg {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }

  .container {
    img {
      max-width: 30.75rem;
      width: 100%;
    }
  }

  @media (max-width: 56.25rem) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .info {
      flex-direction: column;
      align-items: center;
    }

    img {
      margin-top: 2rem;
    }
  }

  @media (max-width: 26.875rem) {
    text-align: center;
    svg {
      margin-bottom: 1rem;
    }
    .info > div {
      padding: 2.5rem 1rem 0 1rem;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`
