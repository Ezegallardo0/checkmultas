import React from 'react'
import '../styles/nav.css'

const Navbar = () => {
    return (
        <>
            <div className='Nav'>
                <h1>Check-Multas</h1>
                <a className='test' href="#">Testimonios</a>
                <div className='buton'>
                    <button className='In'>Iniciar sesion</button>
                    <button className='Cr'>Crear cuenta</button>
                </div>
            </div>
        </>
    )
}

export default Navbar