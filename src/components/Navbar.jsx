import '../styles/nav.css'

const Navbar = () => {
    return (
        <>
            <div className='Nav'>
                <h1 onClick={() => window.location.href = '/'}>Check-Multas</h1>  
                <div className='buton'>
                    <button className='In' onClick={() => window.location.href = '/login'}> <p>Iniciar sesión</p></button>
                    <button className='Cr' onClick={() => window.location.href = '/register'}><p>Crear cuenta</p></button>
                </div>
            </div>
        </>
    )
}

export default Navbar