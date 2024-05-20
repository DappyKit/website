import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { MainNoAuth } from './components/MainNoAuth'
import { FooterNoAuth } from './components/FooterNoAuth'

function App() {
  return (
    <div className="overflow-x-hidden rounded-top-4 pt-2 pt-lg-4">
      <Header />

      <MainNoAuth />

      <FooterNoAuth />
    </div>
  )
}

export default App
