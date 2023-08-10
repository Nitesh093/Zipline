import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';  

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>

        <Route exact path="/" element={<Home/>} />        

      </Routes>
          
          
    </Router>
  )
}

export default App
