import React from 'react'
import foto from '../media/foto.jpeg'
export const Home = () => {
  return (
    <div className='presentacion'>
    <img src={foto}/>
    <h2>Alexander Coronado Lopez</h2>
    <span>Alexander_Coronado027@outlook.com</span>
    <button>Descargar CV</button>
    </div>
  )
}
