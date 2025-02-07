import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import "../styles/Newconsult.css"
import { useNavigate } from 'react-router-dom';


const Newconsult = () => {
    const [Dni, setDni] = useState ("");
    const navigate =  useNavigate();
    const handleInputChange = (e) => {
        setDni(e.target.value);
    }
    const handleSubmit = () => {
        navigate("/consultas", { state: { Dni }});
    }
  return (
    <>
    <Navbar />
    <section className='Newc'>
        <h2 className='h2n'>Consulta tus multas en Capital Federal y Provincia de Buenos Aires en un instante.</h2>
        <div className='patente'>
            <input className='Dni'
            maxLength={10}
            placeholder='Ingresa tu Dni o Patente'
            onInput={(e) => e.target.value = e.target.value.toUpperCase()}
            onChange={handleInputChange}
            />
            <button className='MA' onClick={handleSubmit}>Consulta tus multas ahora</button>
        </div>
    </section>
    </>
  )
}

export default Newconsult;