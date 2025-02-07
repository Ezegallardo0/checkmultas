import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "../styles/consultas.css";
import { Search } from 'lucide-react';

const Consultas = () => {
    const location = useLocation();
    const patente = location.state?.patente;
    const Dni = location.state?.Dni;
    const navigate = useNavigate();

    const handleSubmit = () =>{
        navigate("/nuevaconsulta")
    }

    return (
        <div>
            <Navbar />
            <section className='patent'>
                <div className='menu'>
                <p className='pat'>Patente  {patente} {Dni} </p>
                <button className='Nc' onClick={handleSubmit}>
                    <p>Nueva Consulta  <Search /> </p>
                </button>
                </div>
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
        </div>
    );
};

export default Consultas;
