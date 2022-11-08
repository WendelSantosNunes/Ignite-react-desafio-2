import styled from 'styled-components'

export const MainContainer = styled.main`
  margin-bottom: 9.8125rem;
  h2 {
    padding-left: 10px;
    font-size: 2rem;
    margin-bottom: 3.375rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .coffee {
    width: 100%;
    max-width: 70rem;

    margin: 0 auto;
  }

  .list {
    width: 100%;
    max-width: 70rem;

    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
  }

  .list > div {
    margin: 0 0.625rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.75rem;
  }
`
