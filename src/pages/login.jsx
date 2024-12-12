import { useState } from 'react';
import '../styles/login.css';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [ShPwd, setShPwd] = useState(false);

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
        <form className='formLogin' onSubmit={handleSubmit}>
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
              <div>
                <input
                  required
                  placeholder=""
                  type="password"
                  className="input"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />  <span >Contraseña 
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye-off">
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                  <path d="m2 2 20 20" />
                </svg>
                </span>
              </div>
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