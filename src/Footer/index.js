import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FooterEnlaces } from './FooterEnlaces';
import { FooterAmbientesDigitales } from './FooterAmbientesDigitales';
import { FooterLogoEntidad } from './FooterLogoEntidad';

import './Footer.css';


const menuFooter = [
  { id:"1", text:["Gestión Poblacional, Diferencial y de Género"], href:"#", active: true},
  { id:"2", text:["Gestión de Proyectos de Inversión Local"], href:"#", active: false},
  { id:"3", text:["Control Institucional"], href:"#", active: false},
  { id:"4", text:["Gestión Territorial en salud"], href:"#", active: false},
  { id:"5", text:["Control Social en Salud"], href:"#", active: false}
];


function  Footer(){
    
    return (
        <>
            <Container fluid id="footer" >
                <Row>
                    <Col xs={12} sm={12} xxl={6} xl={6} md={6} lg={6}  >                        
                        <FooterEnlaces enlaces={menuFooter} />
                    </Col>
                    <Col xs={12} sm={12} xxl={3} xl={3} md={3} lg={3}  >
                        <FooterAmbientesDigitales />                                                                
                    </Col>
                    <Col xs={12} sm={12} xxl={3} xl={3} md={3} lg={3}  >
                        <FooterLogoEntidad />                                                                    
                    </Col>                    
                </Row>                 
            </Container>            
        </>
        
    );

}


export {Footer}