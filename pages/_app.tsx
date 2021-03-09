import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
