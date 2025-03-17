import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/consultas.css";
import { Search } from 'lucide-react';
import Register from './register';
import FaqButton from '../components/FaqButton';

const Consultas = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const inputValue = location.state?.inputValue || "";

    return (
        <div>
            <Navbar />
            <section className='patent'>
                <div className='menu'>
                    {inputValue ? (
                        <p className="pat">Patente / DNI: <strong>{inputValue}</strong></p>
                    ) : (
                        <p className="pat">No se ingresó ninguna patente/DNI.</p>
                    )}

                    <button className='Nc' onClick={() => navigate("/nuevaconsulta")}>
                        <p>Nueva Consulta  <Search /> </p>
                    </button>
                </div>
                <hr style={{ border: "0.5px solid #ccc", width: "100%" }} />

                <div className="mensaje-container">
                    <p className="mensaje-titulo">
                        ¡Hola! <span role="img" aria-label="wave">👋</span>
                    </p>
                    <p className="mensaje-texto">
                        A continuación encontrarás un informe de multas en Capital Federal y Provincia de Buenos Aires.
                    </p>
                    <p className="mensaje-texto">
                        Regístrate en <b>CheckMultas</b> y accede a importantes descuentos en tus multas a través de nuestra alianza con <b>SinFotoMultas</b>.
                    </p>
                </div>
            </section>
            <div className="register-section">
                    <Register hideNavbar={true} />
                </div>
                <FaqButton />
        </div>
    );
}; 

export default Consultas;
