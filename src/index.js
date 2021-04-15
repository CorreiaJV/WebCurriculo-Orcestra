import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile'
import Exp from './components/Exp'
import Formacao from './components/Formacao'
import Home from './components/Home'
import Habilidades from './components/Habilidades'
import Contato from './components/Contato'
import NavBar from './components/NavBar'



ReactDOM.render(
    <div>
    <div className= "Parallax">
    <NavBar></NavBar>
        <Home></Home>
        <Profile></Profile>
        <Formacao></Formacao>
        <Exp></Exp>
        <Habilidades></Habilidades>
        <Contato></Contato>
        
    </div>
    </div>,
    document.getElementById('root')
)   