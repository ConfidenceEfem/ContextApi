import React from 'react'
import Header from "./components/Header"
import Register from "./components/Register"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <div>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Register/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App

