import { useState } from 'react'
import './App.css'
import Hero from './features/hero/Hero'
import TruthCard from './features/cards/TruthCard'
import TwoWorldsCard from './features/cards/TwoWorldsCard'
import Cast from './features/characters/Cast'

import Chronicle from './features/chronicle/Chronicle'
import AuthorArchive from './features/author/AuthorArchive'
import Footer from './features/footer/Footer'
function App() {

  return (
    <>
      <Hero />
      <TruthCard />
      <TwoWorldsCard />
      <Cast />

      <Chronicle />
      <AuthorArchive />
      <Footer />
    </>
  )
}

export default App
