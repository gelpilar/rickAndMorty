import React from 'react'
import "../../assets/styles/components/first.css"
import imagenchica from "../../assets/imagenes/imagenchica.png"
import Searcher from './Searcher'
const First = () => {
  return (
    <div className='fondo'>

        <span className='imagen_peque'>
            <img src={imagenchica} alt="" srcset="" className='imagen_logo' />
        </span>

        <Searcher></Searcher>
      {
        /**
         * Imagen fondo
         * Imagen logo 
         * Buscador
         */
      }
    </div>
  )
}

export default First
