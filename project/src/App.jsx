import React from 'react'
import Crousel from './crousel'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Crousel />}/>
        <Route path="/other"  /> {/* Adjust path as necessary */}
      </Routes>
    </Router>
    </div>
  )
}

export default App

