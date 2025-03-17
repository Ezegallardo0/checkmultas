import React, { useRef, useEffect, useState } from 'react';
import '../styles/DropDownCard.css'

/**
 * title: Título de la pregunta
 * text: Contenido de la respuesta
 * isOpen: boolean que indica si está abierta la respuesta
 * onToggle: función para alternar abrir/cerrar
 */
const DropdownCard = ({ title, text, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      // Calcula la altura real del contenido y la asigna para animar
      const scrollHeight = contentRef.current?.scrollHeight || 0;
      setMaxHeight(`${scrollHeight}px`);
    } else {
      // Cierra (altura 0)
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className={`dropdown-card ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-header" onClick={onToggle}>
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>

      {/* Contenedor que animamos con max-height dinámico */}
      <div
        className="dropdown-content"
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
          transition: 'max-height 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DropdownCard;
