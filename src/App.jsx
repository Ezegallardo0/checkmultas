import Navbar from './components/Navbar'
import './styles/app.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='homebg'>
        <h2>Controlá tus multas, ahorrá plata</h2>
        <p className='uni'>Unite a miles de conductores que ahorran plata y evitan sorpresas.</p>
        <div className='patente'>
          <input className='Dni' placeholder="Ingresa tu Dni o Patente" />
          <button className='MA'>Consulta tus multas ahora</button>
        </div>
        <div className='consultas'>
          <button className='psr'>+50,000 consultas realizadas este último mes</button>
        </div>
      </div>
      <div className='Cards'>
        <div className='cheq'>
          <h4 className='cheqh'>Chequeá tu vehículo/moto</h4>
          <p className='cheqp'>Ingresá tu patente o DNI para un escaneo gratis.</p>
        </div>
        <div className='res'>
          <h4 className='resh'>Revisá tu reporte</h4>
          <p className='resp'>Fijate si tenés multas impagas y cuánto podés ahorrar.</p>
        </div>
        <div className='crea'>
          <h4 className='creah'>Creá tu cuenta</h4>
          <p className='config'>Configurá el monitoreo gratis y accedé a descuentos exclusivos.</p>
        </div>
      </div>
      <div className='xq'>
        <div>
          <h1 className='pq'>¿Por qué nos
          eligen?</h1>
          <button className='C2r'>Crear cuenta gratis</button>
        </div>
      </div>
      <div className='Cards2'>
        <div className='Moni'>
          <h4 className='monih'>Monitoreo gratis 24/7</h4>
          <p className='Monip'>Mantenete al tanto de nuevas multas.</p>
        </div>
        <div className='Ahorra'>
          <h4 className='ahr'>Ahorrá hasta un 50%</h4>
          <p className='Ahorrap'>Accedé a descuentos exclusivos
          con SinFotoMultas</p>
        </div>
        <div className='GF'>
          <h4 className='gfh'>Gestión familiar y de flotas</h4>
          <p className='GFP'>Monitoreá varios vehículos, DNI o motos en el mismo lugar.</p>
        </div>
        <div className='Notif'>
          <h4 className='notifh'>Notificaciones al toque</h4>
          <p className='Notifp'>Nunca más te pierdas una fecha de pago ni vencimiento.</p>
        </div>
      </div>
    </>
  )
}

export default App
