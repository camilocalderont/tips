import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LogoFooterTips from "../assets/imagenes/logo_tips_footer.png";
import LogoCuentanosFooter from "../assets/imagenes/logo_cuentanos_footer.png";
import LogoSaludataFooter from "../assets/imagenes/logo_saludata_footer.png";
import LogoAlcaldiaFooter from "../assets/imagenes/logo_alcaldia_footer.png";
import './Footer.css';

/*
const menuFooter = [
  { id:"1", text:["Gestión Poblacional, Diferencial y de Género"], href:"#", active: true},
  { id:"2", text:["Gestión de Proyectos de Inversión Local"], href:"#", active: false},
  { id:"3", text:["Control Institucional"], href:"#", active: false},
  { id:"4", text:["Gestión Territorial en salud"], href:"#", active: false},
  { id:"5", text:["Control Social en Salud"], href:"#", active: false}
];
*/


function  Footer(){
    
    return (
        <>
            <Container fluid id="footer" >
                <Row>
                    <Col xs={12} sm={12} xxl={1} xl={1} md={1} lg={1}  >
                        <a href="/" title="Ir al inicio">
                            <img src={LogoFooterTips} alt="Logo Footer Ambiente Digital de la Estratégia TIPS" id="logoFooter" />   
                        </a>                           
                    </Col> 
                    <Col xs={12} sm={12} xxl={4} xl={4} md={4} lg={4}  >
                        <h2 id="tituloFooter">
                                    Territorios de Innovación y <br />
                                    Participación en Salud
                        </h2>
                        <p>Subsecretaría de Gestión Territorial, Participación y Servicio a la Ciudadanía<br />Secretaría Distrital de Salud</p>                         
                    </Col>                     
                    {/*
                    <Col xs={12} sm={12} xxl={9} xl={9} md={9} lg={9}>
                        <Row>
                            <Col>
                                <h2 id="tituloFooter">
                                    Territorios de Innovación y <br />
                                    Participación en Salud
                                </h2>
                                <p>Subsecretaría de Gestión Territorial, Participación y Servicio a la Ciudadanía<br />Secretaría Distrital de Salud</p>
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
                    <Col xs={12} sm={12} xxl={4} xl={4} md={4} lg={4}  >    
                        <img src={LogoCuentanosFooter} alt="Logo Footer Ambiente Digital de la Estratégia Cuentanos Bogotá" className="logosAmbientesDigitales" id="logoCuentanosFooter" />                
                        <img src={LogoSaludataFooter} alt="Logo Footer Ambiente Digital de la Estratégia SaluData" className="logosAmbientesDigitales" id="logoSaludataFooter" />                                 
                    </Col>                     
                    <Col xs={12} sm={12} xxl={3} xl={3} md={3} lg={3}  >
                        <img src={LogoAlcaldiaFooter} alt="Logo Footer SDS"  id="logoAlcaldiaFooter" />                                                                    
                    </Col>                                                      
                </Row>                 
            </Container>            
        </>
        
    );

}


export {Footer}