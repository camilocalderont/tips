import React from "react";
import './TituloPagina.css';

function TituloPagina(props){
    return (
        <>
            <h3 className="tituloPagina">                                               
                {props.texto}
            </h3>        
        </>
        
    );
}

export {TituloPagina}