import { useState } from 'react';
import './styles/app.css';
import Navbar from './components/Navbar';
import DropdownCard from './components/DropDownCard.jsx';

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
        <div className="cheq">
          <div className='Icon'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-binoculars"
            >
              <path d="M10 10h4" />
              <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
              <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" />
              <path d="M22 16 L2 16" />
              <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" />
              <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
            </svg>
          </div>
          <Card className="card4" title="Chequeá tu vehículo" text="Ingresá tu patente o DNI para un escaneo gratis." />
        </div>
        <div className="res">
          <div className='Icon'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-badge-dollar-sign"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
          </div>
          <Card className="card4" title="Revisá tu reporte" text="Fijate si tenés multas impagas y cuánto podés ahorrar." />
        </div>
        <div className="crea">
          <div className='Icon'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-plus"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg></div>
          <Card className="card4" title="Creá tu cuenta" text="Configurá el monitoreo gratis y accedé a descuentos exclusivos." />
        </div>

      </section>
      <article className='card-container bg-container'>
        <section className="xq">
          <h1 className="pq">¿Por qué nos eligen?</h1>
          <button className="C2r" onClick={() => window.location.href = '/register'}>Crear cuenta gratis</button>
        </section>
        <section className="Cards2">
          <div className='div'>
            <div className='card2'>
              <div className='Icon1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-radar"
                >
                  <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
                  <path d="M4 6h.01" />
                  <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
                  <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
                  <path d="M12 18h.01" />
                  <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="m13.41 10.59 5.66-5.66" />
                </svg>
              </div>
              <Card className="XD" title="Monitoreo gratis 24/7" text="Mantenete al tanto de nuevas multas." />
            </div>
            <div className='card2'>
              <div className="Icon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-piggy-bank"
                >
                  <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
                  <path d="M2 9v1c0 1.1.9 2 2 2h1" />
                  <path d="M16 11h.01" />
                </svg>
              </div>
              <Card className="XD" title="Ahorrá hasta un 50%" text="Accedé a descuentos exclusivos con SinFotoMultas" /></div>
          </div>
          <div className='div2'>
            <div className='card2 card3'>
              <div className="Icon4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-car"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
              <Card className="XD1" title="Gestión familiar y de flotas" text="Monitoreá varios vehículos, DNI o motos en el mismo lugar." /></div>
            <div className='card2 card3'>
              <div className="Icon3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell-ring"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                  <path d="M22 8c0-2.3-.8-4.3-2-6" />
                </svg>
              </div>
              <Card className="XD2" title="Notificaciones al toque" text="Nunca más te pierdas una fecha de pago ni vencimiento." />
            </div>
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
      <div className="review-header">
        <div className="review-author"><b>{review.author}</b></div>
        <div className="review-stars">
          <div className="rating">
            <input value="5" name={`rate-${index}`} id={`star5-${index}`} type="radio" disabled checked={review.stars === 5} />
            <label title="text" htmlFor={`star5-${index}`}></label>
            <input value="4" name={`rate-${index}`} id={`star4-${index}`} type="radio" disabled checked={review.stars === 4} />
            <label title="text" htmlFor={`star4-${index}`}></label>
            <input value="3" name={`rate-${index}`} id={`star3-${index}`} type="radio" disabled checked={review.stars === 3} />
            <label title="text" htmlFor={`star3-${index}`}></label>
            <input value="2" name={`rate-${index}`} id={`star2-${index}`} type="radio" disabled checked={review.stars === 2} />
            <label title="text" htmlFor={`star2-${index}`}></label>
            <input value="1" name={`rate-${index}`} id={`star1-${index}`} type="radio" disabled checked={review.stars === 1} />
            <label title="text" htmlFor={`star1-${index}`}></label>
          </div>
        </div>
      </div>
      <div className="review-text">{review.text}</div>
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