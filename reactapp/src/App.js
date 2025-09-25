import React from 'react'
import Demo from './components/Demo'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Parent from './components/Parent'
import Header from './components/Header'

const App = () => {
  return (
      <BrowserRouter>

      <Header/>
      <Routes>
        <Route path='/' element={<Parent/>}/>


      </Routes>
      
      </BrowserRouter>
  )
}

export default App