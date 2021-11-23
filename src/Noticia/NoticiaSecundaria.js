import React from "react";
import { Col } from 'react-bootstrap';
import { Bloque } from "../Bloque";

function NoticiaSecundaria(props){
    let noticia = props.noticia;
    return (
        <>
            <Col xs={5} sm={5} xxl={5} xl={5} md={5} lg={5}>
                <Bloque className="sombra" style={{background: `url(${noticia.imagen}) center top no-repeat`, backgroundSize: 'cover', minHeight:"180px"}} />
            </Col>         
            <Col xs={6} sm={6} xxl={6} xl={6} md={6} lg={6}>
                <p className="titularNoticia">
                    <a href={noticia.href}>{noticia.titulo}</a>
                    <span className="fechaNoticia">{noticia.fecha}</span>
                </p>
                <div className="descripcionNoticia">{noticia.descripcion}</div>                            
            </Col>
        </>        
    );
}

export {NoticiaSecundaria}