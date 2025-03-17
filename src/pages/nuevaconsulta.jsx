import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import "../styles/Newconsult.css"
import { useNavigate } from 'react-router-dom';
import FaqButton from '../components/FaqButton';


const Newconsult = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputValue(e.target.value.toUpperCase());
    };

    const handleSubmit = () => {
        if (inputValue.trim() === "") return;
        navigate("/consultas", { state: { inputValue } });
    };
    return (
        <>
            <Navbar />
            <section className='Newc'>
                <h2 className='h2n'>Consulta tus multas en Capital Federal y Provincia de Buenos Aires en un instante.</h2>
                <div className='patente'>
                    <input
                        className="Dni"
                        maxLength={10}
                        placeholder="Ingresa tu Dni o Patente"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className='MA' onClick={handleSubmit}>Consulta tus multas ahora</button>
                </div>
                <FaqButton />
            </section>
        </>
    )
}

export default Newconsult;