import React, { useState } from "react";
import DropdownCard from "./DropDownCard";
import "../styles/FAQ.css"; // Estilos CSS

const FaqButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Estado para manejar qué dropdown está abierto

  const closeSidebar = () => setIsOpen(false);
  const openSidebar = () => setIsOpen(true);

  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      {/* Botón FAQ flotante */}
      <button className="faq-button" onClick={openSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="faq-icon"
        >
          <path
            d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`faq-sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-sidebar-button" onClick={closeSidebar}>✖</button>
        <section className="preguntas">
          <h2>Preguntas Frecuentes</h2>
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
            text='Si! Podes monitorear hasta 5 vehículos de manera gratuita. Para crearlos solo debes acceder a "Mis bots" y hacer clic en "Nuevo bot".'
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
      </div>
      {isOpen && <div className="faq-overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default FaqButton;
