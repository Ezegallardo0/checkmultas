import React from 'react'
import '../styles/nav.css'

const Navbar = () => {
    return (
        <>
            <div className='Nav'>
                <h1>Check-Multas</h1>
                <a className='test' href="#">Testimonios</a>
                <div className='buton'>
                    <button className='In' onClick={() => window.location.href = '/login'}>Iniciar sesión</button>
                    <button className='Cr' onClick={() => window.location.href = '/register'}>Crear cuenta</button>
                </div>
            </div>
        </>
    )
}

export default Navbar