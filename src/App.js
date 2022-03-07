import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import VendingMachine from './VendingMachine'
import Snack from './Snack'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/honeysticks'>
          <Snack snack='honeysticks' />
        </Route>
        <Route exact path='/taffy'>
          <Snack snack='taffy' />
        </Route>
        <Route exact path='/pecans'>
          <Snack snack='pecans' />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
