import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagina from './components/Pagina'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>test</h1>
      <Pagina />
    </>
  )
}

export default App
