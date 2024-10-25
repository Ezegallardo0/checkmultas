import Navbar from './components/Navbar';
import './styles/app.css';

function App() {
  return (
    <>
      <Navbar />
      <section className="homebg">
        <h2>Controlá tus multas, ahorrá plata</h2>
        <p className="uni">Unite a miles de conductores que ahorran plata y evitan sorpresas.</p>
        <div className="patente">
          <input className="Dni" placeholder="Ingresa tu Dni o Patente" />
          <button className="MA">Consulta tus multas ahora</button>
        </div>
        <button className="psr">+50,000 consultas realizadas este último mes</button>
      </section>

      <section className="Cards">
        <Card title="Chequeá tu vehículo/moto" text="Ingresá tu patente o DNI para un escaneo gratis." className="cheq" />
        <Card title="Revisá tu reporte" text="Fijate si tenés multas impagas y cuánto podés ahorrar." className="res" />
        <Card title="Creá tu cuenta" text="Configurá el monitoreo gratis y accedé a descuentos exclusivos." className="crea" />
      </section>

      <section className="xq">
        <h1 className="pq">¿Por qué nos eligen?</h1>
        <button className="C2r">Crear cuenta gratis</button>
      </section>

      <section className="Cards2">
        <Card title="Monitoreo gratis 24/7" text="Mantenete al tanto de nuevas multas." className="Moni" />
        <Card title="Ahorrá hasta un 50%" text="Accedé a descuentos exclusivos con SinFotoMultas" className="Ahorra" />
        <Card title="Gestión familiar y de flotas" text="Monitoreá varios vehículos, DNI o motos en el mismo lugar." className="GF" />
        <Card title="Notificaciones al toque" text="Nunca más te pierdas una fecha de pago ni vencimiento." className="Notif" />
      </section>
    </>
  );
}

function Card({ title, text, className }) {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default App;
