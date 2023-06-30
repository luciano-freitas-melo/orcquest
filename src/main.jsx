import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  background-image: linear-gradient(
    90deg,
    rgba(48, 16, 255, 1) 0%,
    rgba(100, 115, 255, 1) 100%
  );
}
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
