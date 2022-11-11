import styled from 'styled-components'

export const MainContainer = styled.main`
  margin-bottom: 9.8125rem;
  background-color: ${(props) => props.theme['background-regular']};

  .coffee {
    width: 100%;
    max-width: 71.25rem;

    margin: 0 auto;

    h2 {
      padding-left: 10px;
      font-size: 2rem;
      margin: 2rem 0 3.375rem 0;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .list {
    width: 100%;
    max-width: 71.25rem;

    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  .list > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.75rem;

    @media (max-width: 60rem) {
      grid-template-columns: 1fr 1fr 1fr;
      margin: 0 auto;
    }

    @media (max-width: 45rem) {
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
    }

    @media (max-width: 28.75rem) {
      grid-template-columns: 1fr;
      margin: 0 auto;
    }
  }
`
