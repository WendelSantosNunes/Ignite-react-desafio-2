import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-regular']};
    }
   
    body {
        background-color: ${(props) => props.theme['background-regular']};
        color: ${(props) => props.theme['base-text']};
        --webkit-font-smoothing: antialiased;
    }
    body, textarea, input, button{
        font-family: 'Baloo 2', cursive;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
