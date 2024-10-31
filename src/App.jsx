import { useState } from 'react';
import './styles/app.css';
import Navbar from './components/Navbar';
import DropdownCard from './components/DropdownCard';

function App() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleToggle = (index) => {
    if (isTransitioning) return;

    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setIsTransitioning(true);
      setOpenDropdown(null);
      setTimeout(() => {
        setOpenDropdown(index);
        setIsTransitioning(false);
      }, 300); // Ajusta este valor según la duración de la transición
    }
  };

  const reviews = [
    {
      text: "Excelente servicio!! Muy eficiente, atención personalizada y precio razonable, lo recomiendo 100%",
      stars: 5,
      author: "Catalina T."
    },
    {
      text: "Un espectáculo, la solución a mis problemas",
      stars: 5,
      author: "Nicolas A."
    },
    {
      text: "De diez el servicio, me resolvieron una infracción",
      stars: 5,
      author: "Luis V."
    },
    {
      text: "La verdad que el sistema funciona bastante bien. Tuve dos multas por un total de $241258 (Pago voluntario de $120629)...",
      stars: 5,
      author: "Fede R."
    },
    {
      text: "Funciona re bien, me llegó el mensaje de una multa en un lugar que nunca transité y era que un auto tenía la patente muy parecida a la mía...",
      stars: 5,
      author: "Pablo M."
    }
  ];

  const renderStars = (stars) => {
    return Array(stars)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-star-icon fill-amber-100 stroke-amber-500 size-6 md:size-8"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ));
  };

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

      <article className='card-container bg-container'>
        <section className="xq">
          <h1 className="pq">¿Por qué nos eligen?</h1>
          <button className="C2r" onClick={() => window.location.href = '/register'}>Crear cuenta gratis</button>
        </section>
        <section className="Cards2">
          <div className='div'>
            <Card title="Monitoreo gratis 24/7" text="Mantenete al tanto de nuevas multas." className="card2" />
            <Card title="Ahorrá hasta un 50%" text="Accedé a descuentos exclusivos con SinFotoMultas" className="card2"
            />
          </div>
          <div className='div'>
            <Card title="Gestión familiar y de flotas" text="Monitoreá varios vehículos, DNI o motos en el mismo lugar." className="card2 card3" />
            <Card title="Notificaciones al toque" text="Nunca más te pierdas una fecha de pago ni vencimiento." className="card2 card3" />
          </div>
        </section>
      </article>

      <div className="reviews-container">
        <div className="reviews-header">
          <h1>Más de 500 personas confían en Check multas</h1>
        </div>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} id={`review-${index}`} className="card">
              <div className="review-text">{review.text}</div>
              <div className="review-stars">{renderStars(review.stars)}</div>
              <div className="review-author"><b>{review.author}</b></div>
            </div>
          ))}
        </div>
      </div>
      <article className='Questions'>
        <section className='pregu'>
          <h2 className='PreFre'>Preguntas frecuentes</h2>
        </section>
        <section className='preguntas'>
          <DropdownCard
            title='¿Es legal CheckMultas?'
            text='Si, nuestra empresa es 100% legal y transparente, no hay letra chica en nuestro servicio.'
            isOpen={openDropdown === 0}
            onToggle={() => handleToggle(0)}
          />
          <DropdownCard
            title='¿Cómo funciona el monitoreo automático gratuito de CheckMultas?'
            text='Multabot monitorea los registros de infracciones de Capital Federal y Provincia de Buenos Aires. No manipulamos información por nuestra cuenta.'
            isOpen={openDropdown === 1}
            onToggle={() => handleToggle(1)}
          />
          <DropdownCard
            title='¿Qué tipos de notificaciones recibiré y cómo las recibiré?'
            text='Vamos a enviarte notificaciones de nuevas infracciones y también recordatorios de vencimientos próximos.'
            isOpen={openDropdown === 2}
            onToggle={() => handleToggle(2)}
          />
          <DropdownCard
            title='¿Puedo monitorear más de un vehículo?'
            text='Podés tener vehículos o DNI ilimitados por cuenta.'
            isOpen={openDropdown === 3}
            onToggle={() => handleToggle(3)}
          />
          <DropdownCard
            title='¿Puedo monitorear mi documento DNI?'
            text='Sí! Monitoreo de DNI también está disponible.'
            isOpen={openDropdown === 4}
            onToggle={() => handleToggle(4)}
          />
          <DropdownCard
            title='¿Multabot ofrece descuentos en multas?'
            text='A través de nuestra alianza con SinFotoMultas los usuarios de Multabot pueden acceder a importantes descuentos en sus infracciones.'
            isOpen={openDropdown === 5}
            onToggle={() => handleToggle(5)}
          />
          <DropdownCard
            title='¿Puedo monitorear múltiples vehículos y cómo lo hago?'
            text='Si! Podes monitorear hasta 5 vehículos de manera gratuita. Para crearlos solo debes acceder a "Mis bots" y hacer clic en "Nuevo bot"'
            isOpen={openDropdown === 6}
            onToggle={() => handleToggle(6)}
          />
          <DropdownCard
            title='¿Multabot ofrece cobertura en qué áreas y tiene planes de expansión?'
            text='Por ahora ofrecemos servicio para Capital Federal y Provincia de Buenos Aires. CheckMultas será nacional en poco tiempo.'
            isOpen={openDropdown === 7}
            onToggle={() => handleToggle(7)}
          />
        </section>
      </article>
    </>
  );
}

import PropTypes from 'prop-types';

function Card({ title, text, className }) {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default App;