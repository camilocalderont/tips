import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LogoAlcaldiaFooter from "../assets/imagenes/logo_alcaldia_footer.png";

import './FooterLogoEntidad.css';




function  FooterLogoEntidad(props){
    
    return (
        <>
            <Row className="w-100 contenedorLogo">
                <Col className="border-right">
                    <img src={LogoAlcaldiaFooter} alt="Logo Footer SDS"  id="logoAlcaldiaFooter" />                
                </Col>
            </Row>                          
        </>
        
    );

}


export {FooterLogoEntidad}