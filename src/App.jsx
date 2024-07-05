import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Products></Products>
    </div>
  )
}

export default App
