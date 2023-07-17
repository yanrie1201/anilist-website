// @ts-ignore
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { Body } from './styles/globals'
// @ts-ignore
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="anime/:id" element={<Detail />} />
        </Routes>
      </Body>
    </BrowserRouter>
  )
}

export default App
