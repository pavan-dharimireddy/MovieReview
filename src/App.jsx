import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'

function App() {

  return (
    <div>
      <MovieCard  movie={{title : "moviename"}}></MovieCard>
      <Home></Home>
    </div>
      
  )
}

export default App
