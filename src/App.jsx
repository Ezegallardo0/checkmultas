import './App.css'
import Navbar from './components/Navbar'
import './styles/app.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='homebg'>
        <h2>Controlá tus multas, ahorrá plata</h2>
        <p>Unite a miles de conductores que ahorran plata y evitan sorpresas.</p>
        <div className='patente'>
          <input className='Dni' placeholder="Ingresa tu Dni o Patente" />
          <button className='MA'>Consulta tus multas ahora</button>
        </div>
        <div className='consultas'>
          <button className='psr'>+50,000 consultas realizadas este último mes</button>
        </div>
      </div>
    </>
  )
}

export default App
