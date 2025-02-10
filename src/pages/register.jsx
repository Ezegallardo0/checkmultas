import { useState } from 'react';
import '../styles/register.css';
import Navbar from '../components/Navbar';

const Register = ({ hideNavbar = false }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <>
      {!hideNavbar && <Navbar />}  {/* SOLO SE MUESTRA SI hideNavbar ES FALSE */}
      
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Crear cuenta</p>
        <p className="message">Regístrese ahora y obtenga acceso completo a nuestra aplicación.</p>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <span>Nombre</span>
          </label>

          <label>
            <input required placeholder="" type="text" className="input" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <span>Apellido</span>
          </label>
        </div>

        <label>
          <input required placeholder="" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
          <span>Email</span>
        </label>

        <label className='pas'>
          <input required placeholder="" type={showPassword ? "text" : "password"} className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
          <span>Contraseña</span>
        </label>

        <label>
          <input required placeholder="" type={showPassword ? "text" : "password"} className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <span>Confirmar Contraseña</span>
        </label>

        <button type="submit" className="submit">Crear cuenta</button>
        <p className="signin">
          ¿Ya tenes una cuenta? <a className='log' onClick={() => window.location.href = '/login'}>Iniciar sesión</a>
        </p>
      </form>
    </>
  );
};

export default Register;
