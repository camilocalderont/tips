import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LogoCuentanosFooter from "../assets/imagenes/logo_cuentanos_footer.png";
import LogoSaludataFooter from "../assets/imagenes/logo_saludata_footer.png";

import './FooterAmbientesDigitales.css';




function  FooterAmbientesDigitales(props){
    
    return (
        <>
            <Row className="w-100 contenedorAmbientesDigitales">
                <Col className="border-right">
                    <img src={LogoCuentanosFooter} alt="Logo Footer Ambiente Digital de la Estratégia Cuentanos Bogotá" className="logosAmbientesDigitales" id="logoCuentanosFooter" />                
                </Col>
                <Col>
                    <img src={LogoSaludataFooter} alt="Logo Footer Ambiente Digital de la Estratégia SaluData" className="logosAmbientesDigitales" id="logoSaludataFooter" />                                              
                </Col>
            </Row>                          
        </>
        
    );

}


export {FooterAmbientesDigitales}