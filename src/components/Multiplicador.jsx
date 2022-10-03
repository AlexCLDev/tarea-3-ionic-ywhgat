import React, { useState, useRef } from 'react'

export const Multiplicador = () => {

    const [multiplicacion, Setmultiplicacion] = useState()
    const [numero, setNumero] = useState()
    const miTabla = useRef();

    const sumar = (e) =>{
        e.preventDefault()
        
        let num1 = Number(e.target.numero1.value)

        for(let i=1; i<14; i++){
            let resultado = num1 * i;

            Setmultiplicacion(resultado)
            setNumero(i)

            let {current: tabla} = miTabla;
            tabla.innerHTML += "<br> " + num1 + " * " + i  + " es: " + resultado
        }


    }
  return (
    <>
    <h2>Multiplicar un numero</h2>
    <form onSubmit={sumar}>
        <input type='number' name='numero1'/>
        <input type='submit'/>
    </form>
    <h2></h2>
    <div className='resultado'>
        <p ref={miTabla}></p>
    </div>
    </>
  )
}
