import { useState } from 'react'
import './App.css'
import Hero from './features/hero/Hero'
import TruthCard from './features/cards/TruthCard'
import TwoWorldsCard from './features/cards/TwoWorldsCard'
import Cast from './features/characters/Cast'

function App() {

  return (
    <>
      <Hero />
      <TruthCard />
      <TwoWorldsCard />
      <Cast />
    </>
  )
}

export default App
