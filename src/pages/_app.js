import React from "react";
import { ThemeProvider } from "styled-components"
import { CSSGlobal } from "../styled/CSSGlobal"
import ColorModeProvider, { ColorModeContext } from "../components/Menu/components/ColorMode"
import RegisterVideo from "../components/RegisterVideo";

const theme = {
  light: {
      backgroundBase: "#f9f9f9",
      backgroundLevel1: "#ffffff",
      backgroundLevel2: "#f0f0f0",
      borderBase: "#e5e5e5",
      textColorBase: "#222222",
  },
  dark: {
      backgroundBase: "#181818",
      backgroundLevel1: "#202020",
      backgroundLevel2: "#313131",
      borderBase: "#383838",
      textColorBase: "#FFFFFF",
  }
};

// _app.js -> Definições globais do NextJS
// ThemeProvite -> Prover o tema para a app toda
// ColorModeProvider -> state de light ou dark mode para todo mundo

function ProviderWrapper(props) {
  return (
      <ColorModeProvider initialMode={"dark"}>
          {props.children}
      </ColorModeProvider>
  )
}
  
function MyApp({ Component, props }) {
  const contexto = React.useContext(ColorModeContext);
  // console.log(contexto.mode);
  return (
      <ThemeProvider theme={theme[contexto.mode]}>
        <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet"></link>
        <CSSGlobal />
        <Component {...props} />
        <RegisterVideo />
      </ThemeProvider>
  )
}

export default function _App(props) {
  return (
      <ProviderWrapper>
          <MyApp {...props} />
      </ProviderWrapper>
  )
};
