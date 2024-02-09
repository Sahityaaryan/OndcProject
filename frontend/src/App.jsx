import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCreate from './components/ProductCreate'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductCreate/>
    </>
  )
}

export default App
