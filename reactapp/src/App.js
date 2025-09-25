import React from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Demo from './components/Demo'
import Header from './components/Header'
import Login from './components/Login'
import Footer from './components/Footer'


const App = () => {
  return (
     <div>
      <BrowserRouter>
      <Header/>
      <Routes>
         <Route path='/' element={<Demo/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     </div>
  )
}

export default App