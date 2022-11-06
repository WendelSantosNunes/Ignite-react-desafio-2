import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 1120px;
  width: 100%;

  margin: 2.0625rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 0.375rem;

    padding: 0.5rem;
    margin-right: 0.75rem;
    font-size: 0.875rem;

    svg {
      margin-right: 0.25rem;
    }
  }

  .cart {
    margin: 0.5rem;

    background-color: ${(props) => props.theme['yellow-light']};

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    &:hover {
      cursor: pointer;
    }
  }
`
