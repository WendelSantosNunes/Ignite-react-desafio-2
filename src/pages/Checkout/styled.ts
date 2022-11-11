import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 71.25rem;

  margin: 0 auto;

  form {
    margin: 0 10px;
    display: flex;

    h2 {
      font-family: 'Baloo 2', cursive;
      font-weight: bold;
      font-size: 1.125rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 71.25rem) {
    .complement {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 58.125rem) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    max-width: 70rem;
  }
`

export const CheckoutDataContainer = styled.div`
  margin-right: 2rem;

  max-width: 40rem;
  width: 100%;

  .inf {
    display: flex;

    div {
      margin: 0 0 2rem 0.5rem;

      h3 {
        color: ${(props) => props.theme['base-subtitle']};
        margin-bottom: 0.25rem;
      }

      p {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }

  .checkoutInf {
    background-color: ${(props) => props.theme['base-card']};

    padding: 2.5rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    input {
      background-color: ${(props) => props.theme['base-input']};
      border: none;
      padding: 12px;
    }

    input::placeholder {
      font-size: 0.875rem;
    }

    .zipCode {
      max-width: 12.5rem;
      width: 100%;

      display: block;
      margin-bottom: 1rem;
    }

    .road {
      width: 100%;
      margin-bottom: 1rem;
    }

    .houseNumber,
    .district {
      max-width: 12.5rem;
      width: 100%;

      margin: 0 0.75rem 1rem 0;
    }

    .complement {
      max-width: 21.75rem;
      width: 100%;
    }

    .city {
      max-width: 17.25rem;
      width: 100%;

      margin-right: 0.75rem;
    }

    .uf {
      max-width: 3.75rem;
      width: 100%;
    }
  }

  .checkoutPayment {
    background-color: ${(props) => props.theme['base-card']};
    margin-top: 0.75rem;

    padding: 2.5rem;

    svg {
      color: ${(props) => props.theme['purple-regular']};
    }

    .payment {
      display: flex;
      justify-content: space-around;

      div {
        background-color: ${(props) => props.theme['base-input']};
        border: none;
        padding: 0.75rem;

        max-width: 11.125rem;
        width: 100%;

        display: flex;

        p {
          font-size: 0.75rem;
          margin-left: 0.75rem;
        }
      }
    }
  }

  @media (max-width: 71.25rem) {
    .checkoutPayment {
      margin-bottom: 1rem;
    }
    .payment {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }

  @media (max-width: 58.125rem) {
    margin-right: 0;
  }
`

export const CheckoutConfirmationContainer = styled.div`
  max-width: 28rem;
  width: 100%;

  & > div {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 0.25px 2.75rem 0.25px 2.75rem;

    padding: 2.5rem 0;
  }

  .items {
    max-width: 23rem;
    width: 100%;

    margin-bottom: 1.5rem;

    display: flex;
    justify-content: space-between;
    padding-bottom: 32px;

    border-bottom: 1px solid ${(props) => props.theme['base-button']};

    img {
      max-width: 4rem;
      width: 100%;
    }

    .itemsDate {
      display: flex;
    }

    .buttonItem {
      margin-left: 1.25rem;
      text-align: left;

      div {
        display: flex;
        justify-content: space-around;

        div {
          background-color: ${(props) => props.theme['base-button']};
          width: 5.625rem;

          margin: 0.5rem 0.5rem 0 0;
          padding: 0.4rem;

          button {
            background-color: ${(props) => props.theme['base-button']};
            border: none;

            display: flex;
            align-items: center;
          }

          p {
            font-size: 0.75rem;
          }

          .ItemNumber {
            font-size: 1rem;
          }

          svg {
            color: ${(props) => props.theme['purple-regular']};
          }
        }

        .remover {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  div {
    div {
      margin: 0 auto;
      text-align: center;

      .itemDonay {
        display: flex;
        justify-content: space-around;

        div {
          display: flex;
          flex-direction: column;

          color: ${(props) => props.theme['base-text']};

          p {
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
          }

          strong {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }
        }

        div:nth-child(1) {
          align-items: flex-start;
        }

        div:nth-child(2) {
          align-items: flex-end;
        }
      }

      input {
        max-width: 23rem;
        width: 100%;

        padding: 0.75rem 0;

        background-color: ${(props) => props.theme['yellow-regular']};
        color: ${(props) => props.theme['white-regula']};

        border: none;
        border-radius: 6px;
      }

      input:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  @media (max-width: 58.125rem) {
    max-width: 40rem;
  }

  @media (max-width: 23.75rem) {
    div div {
      margin: 0 0;
    }

    .buttonItem p {
      font-size: 0.875rem;
    }
    .itemStatus {
      display: flex;
    }

    img {
      display: none;
      visibility: hidden;
    }
  }
`
