import styled from 'styled-components'

export const CardContainer = styled.div`
  &:nth-child(4) {
    margin-right: 0;
  }

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2rem 0.375rem 2rem;
  width: 100%;
  max-width: 16rem;

  .coffeeImg,
  .coffeeInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CoffeeImg = styled.div`
  img {
    position: relative;
    top: -1.25rem;
  }
`

export const CoffeeInf = styled.div`
  .brand {
    display: fledx;
    gap: 0.25rem;

    p {
      font-size: 0.625rem;
      font-weight: bold;

      padding: 0.25rem 0.5rem;
      margin-bottom: 1rem;
      border-radius: 6.25rem;

      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  h3 {
    font-weight: bold;
    font-size: 1.25rem;

    margin-bottom: 0.5rem;
  }

  .description {
    height: 2.25rem;
    margin: 0 1.25rem 2rem;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};

      text-align: center;
    }
  }
`

export const CoffeePrice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;

  .price {
    font-size: 0.875rem;

    strong {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  .amount {
    display: flex;
    align-items: center;

    margin: 0 0.5rem 0 1.4375rem;
    padding: 0.59375rem;
    border-radius: 6px;

    background-color: ${(props) => props.theme['base-button']};

    button {
      color: ${(props) => props.theme['purple-regular']};
      border: none;
      background-color: Transparent;

      cursor: pointer;
    }

    p {
      padding: 0 0.5rem;
    }
  }

  .shopping {
    color: ${(props) => props.theme['base-card']};
    background-color: ${(props) => props.theme['purple-dark']};
    padding: 0.46rem;

    border-radius: 6px;
    display: flex;
    align-items: center;

    cursor: pointer;
  }
`
