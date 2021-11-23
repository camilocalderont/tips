import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LogoFooterTips from "../assets/imagenes/logo_tips_footer.png";
import LogoCuentanosFooter from "../assets/imagenes/logo_cuentanos_footer.png";
import LogoSaludataFooter from "../assets/imagenes/logo_saludata_footer.png";

import './FooterEnlaces.css';




function  FooterEnlaces(props){
    
    return (
        <>
            <Row className="contenedorFooterEnlaces w-100">
                <Col xs={12} sm={12} xxl={9} xl={9} md={9} lg={9}>
                    <img src={LogoCuentanosFooter} alt="Logo Footer Ambiente Digital de la Estratégia Cuentanos Bogotá" className="logosAmbientesDigitales" id="logoCuentanosFooter" />                
                    <img src={LogoFooterTips} alt="Logo Footer Ambiente Digital de la Estratégia TIPS" id="logoFooter" />       
                    <img src={LogoSaludataFooter} alt="Logo Footer Ambiente Digital de la Estratégia SaluData" className="logosAmbientesDigitales" id="logoSaludataFooter" />                         
                </Col>
                {/*
                <Col xs={12} sm={12} xxl={9} xl={9} md={9} lg={9}>
                    <Row>
                        <Col>
                            <h2 id="tituloFooter">
                                Dirección de Participación Social <br />
                                Gestión Territorial y Transectorialidad
                            </h2>
                        </Col>                        
                    </Row> 
                    <Row>
                        <ul className="menuFooter">
                            { props.enlaces.map( menu => (
                                <li key={menu.id}>
                                    <a href={menu.href}>
                                        {menu.text}
                                    </a>
                                </li>
                            ))
                            }
                        </ul>
                    </Row>                                        
                </Col>
                */}
            </Row>                          
        </>
        
    );

}


export {FooterEnlaces}