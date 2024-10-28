import React, { useState } from 'react';
import '../styles/login.css';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

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
        <form className='form' onSubmit={handleSubmit}>
          <p className='title'>Iniciar sesión</p>
          <div>
            <label>
              <input
                required
                placeholder=""
                type="email"
                className="input"
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
                className="input"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
              <span>Contraseña</span>
            </label>
            <button type='submit' className='submit'>Iniciar sesión</button>
            <p className='signin'>
              ¿No tenes Cuenta todavia? <a className='log' onClick={() => window.location.href = '/register'}>Crear Cuenta</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;