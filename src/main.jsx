import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createGlobalStyle } from 'styled-components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  background: linear-gradient(#6f3096,#06114f);
  background-repeat: no-repeat;
}
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teste" element={<p>Testando as rotas</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
