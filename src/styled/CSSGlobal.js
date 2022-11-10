import { createGlobalStyle } from "styled-components";

export const CSSGlobal = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({ theme }) => theme.textColorBase};
    
    display: flex;
    flex: 1;
  }

  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  #__next {
    display: flex;
    flex: 1;
    width: 100%
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }

  ::-webkit-scrollbar{
    background-color: #e9e9e9;
    height: 8px;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #666666;
  }
`;