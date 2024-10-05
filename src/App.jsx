// import { useState } from 'react'
import MemeCard from './pages/MemeCard'
import Edit from './pages/EditPage'
import "./App.css"
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <h1 style={{textAlign:'center'}}>Meme generator</h1>
      <Routes>
        <Route path='/' element={<MemeCard/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
      
    </>
  )
}

export default App
