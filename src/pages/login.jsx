import React, { useState } from 'react'
import '../styles/login.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Login = () => {
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
    <div className='container'>
    <form className='form1' onSubmit={handleSubmit}>
      <p className='title1'>Iniciar sesión</p>
      <div>
        <label>
        <input
          required
          placeholder=""
          type="email"
          className="input1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>Email</span>
      </label>

      <label>
        <input
          required
          placeholder=""
          type="password"
          className="input2"
          value={contraseña}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>Contraseña</span>
      </label>
        <button type='submit1' className='submit1'>Iniciar sesión</button>
        <p className='signing1'>
        ¿No tenes Cuenta todavia? <a className='reg' onClick={() => window.location.href = '/register'}>Crear Cuenta</a>
        </p>
      </div>
    </form>
    </div>
    </>
  )
}

export default Login