// Cargando.js
import { useState, useEffect } from "react";
import "../styles/loading.css";
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

function Cargando() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Para navegar a otras rutas

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate('/consultas'); // Redirige automáticamente después de la carga
    }, 2000); // Puedes ajustar el tiempo según lo necesites
  }, [navigate]);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <section className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </section>
        </div>
      ) : (
        <div className="content">
          {/* Ya no es necesario mostrar Consultas aquí */}
        </div>
      )}
    </div>
  );
}

export default Cargando;
