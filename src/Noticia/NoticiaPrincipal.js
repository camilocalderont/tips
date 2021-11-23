import React from "react";
import { Col } from 'react-bootstrap';
import { Bloque } from "../Bloque";

function NoticiaPrincipal(props){
    let noticia = props.noticia;
    return (
        <>
            <Col xs={12} sm={12} xxl={12} xl={12} md={12} lg={12}>
                <Bloque className="sombra" style={{background: `url(${noticia.imagen}) center top no-repeat`, backgroundSize: 'cover'}} />
                <p className="titularNoticia mt-1em">
                    <a href={noticia.href}>{noticia.titulo}</a>
                    <span className="fechaNoticia">{noticia.fecha}</span>
                </p>
                <div className="descripcionNoticia">{noticia.descripcion}</div>
            </Col>  
        </>        
    );
}

export {NoticiaPrincipal}