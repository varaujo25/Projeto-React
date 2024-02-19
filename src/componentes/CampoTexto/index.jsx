import React from "react";
import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitarNoCampo = (evento) => {
        props.aoAlterarCampo(evento.target.value)      
    }
    const placeholderModificada = `${props.placeholder}...`;

    return(
        <div className="campo-texto">
            <label>{props.label}</label> 
            <input onChange={aoDigitarNoCampo} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;