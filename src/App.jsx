import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="mt-12 flex">
        <Formulario></Formulario>
        <ListadoPacientes></ListadoPacientes>
      </div>
    </div>
  )
}

export default App
