import React from "react";
import { Row } from 'react-bootstrap';
import { Bloque } from "../Bloque";
import { Noticia } from "../Noticia";
import './Noticias.css';

function Noticias(props){
    const {noticias}  = props;
    let noticiaPrincipal = noticias.shift();

    return (
        <>
            <Bloque xs={props.xs} sm={props.sm} xxl={props.xxl} xl={props.xl} md={props.md} lg={props.lg} 
                    className="bordeAzulCielo sombra pt-40" >
                <h4 className="tituloPrincipalNoticias mt">Participación <span>al Día</span></h4>
                <Noticia noticia={noticiaPrincipal} principal={true} />
                <hr className="azul pt1" />
                <Row className="mt-1em overflow368">
                    { noticias.map( noticia => (

                        <Noticia key={noticia.id} noticia={noticia} principal={false} />                                  
                    ))}
                </Row>   
            </Bloque>                            
        </>        
    );
}

export {Noticias}