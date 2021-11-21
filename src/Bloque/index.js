import React from "react";
import { Col } from 'react-bootstrap';
import './Bloque.css';

function Bloque(props){
    let clases = `contenedorBloque ${props.className}`
    return (
        <>
            <Col xs={props.xs} sm={props.sm} xxl={props.xxl} xl={props.xl} md={props.md} lg={props.lg}  >                        
                <div className={clases} style={props.style}>
                    {props.children}
                </div>
            </Col>                            
        </>        
    );
}

export {Bloque}