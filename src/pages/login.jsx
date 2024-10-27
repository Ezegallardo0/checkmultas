import React, { useState } from 'react'
import '../styles/login.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const login = () => {
  const [email, setEmail] = useState ('')
  const [contraseña, setContraseña ] = useState ('')

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      contraseña
    });
  };
  return (
    <>
    <Navbar />
    <form className='form' onSubmit={handleSubmit}>
      <p className='title'>Iniciar sesión</p>
      <div className='flex'>
        <label>
          <input required placeholder="" type='email' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder="" type='password' className='input' value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
        </label>
        <button type='submit' className='submit'>Iniciar sesión</button>
        <p className='signing'>
        ¿No tenes Cuenta todavia? <a onClick={() => window.location.href = '/register'}>Crear Cuenta</a>
        </p>
      </div>
    </form>
    </>
  )
}

export default login