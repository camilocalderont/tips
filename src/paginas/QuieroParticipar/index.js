import React from "react";
import { Container, Row, Form, Col } from 'react-bootstrap';
import '../generalPaginas.css';
import { TipsButton } from "../../TipsButton";
import { TituloPagina } from "../../TituloPagina";
import { Bloque } from "../../Bloque";

import './QuieroParticipar.css';
  
/*
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
*/ 
function QuieroParticipar(props){
    return (
        <>
            <Container fluid>
                <Row>
                    <Bloque className="" xs={12} sm={12} xxl={5} xl={5} md={5} lg={5}>
                        <TituloPagina texto="Quiero Participar" />
                            <div className="resumenPagina">
                                <p><strong>Crea tu perfil de usuario para interactuar en el ambiente digital</strong></p>
                            </div>
                        <TipsButton href="#" className="boton chico amarillo borde10">
                           #YoParticipoEnSalud                 
                        </TipsButton> 
                    </Bloque> 
                    <Bloque xs={12} sm={12} xxl={7} xl={7} md={7} lg={7}  
                        className="bordeAzul sombra" 
                        style={{
                            background: `url(/imagenes/paginas/acerca-tips.png) center top no-repeat`, 
                            backgroundSize: 'cover', 
                            minHeight:"470px"
                        }} 
                              
                    />         
                </Row>  
                <hr className="amarillo" />
                <Row>
                    <Bloque xs={12} sm={12} xxl={12} xl={12} md={12} lg={12}  
                        className="bordeAzulCielo sombra">
                            <Form>
                                <Row>
                                    <Col xs={12} sm={12} xxl={6} xl={6} md={6} lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Nombre y apellido</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Tipo de documento de identidad</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group> 
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Número de documento de identidad</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Número de teléfono</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>                                                                                                                                                             
                                    </Col>
                                    <Col xs={12} sm={12} xxl={6} xl={6} md={6} lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Fotografía</Form.Label>
                                            <Form.Control type="file" placeholder="Introducir texto" />
                                        </Form.Group>                                       
                                    </Col>                                    
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12} xxl={6} xl={6} md={6} lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Correo electrónico</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Lugar de nacimiento</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group> 
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Localidad en la que vive</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Sexo biológico</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>¿Pertenence a una población diferencial?</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Organización ciudadana o proceso de participación al cual pertenece</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>                                                                                                                                                                                                                                                                                     
                                    </Col>
                                    <Col xs={12} sm={12} xxl={6} xl={6} md={6} lg={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>1. Nombre de la iniciativa</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Fecha de nacimiento</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group> 
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Estrato económico</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Identidad de género</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>¿A qué población diferencial pertenece?</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>  
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>¿Cuáles de los siguientes temas son de tu interés?</Form.Label>
                                            <Form.Control type="text" placeholder="Introducir texto" />
                                        </Form.Group>                                                                                                                                                                                                                                                                                                                             
                                    </Col>                                                                     
                                </Row>   
                                <Row>
                                    <Col xs={12} sm={12} xxl={6} xl={6} md={6} lg={6}>
                                        <TipsButton href="#" className="boton block chico amarillo borde10 textoCentro">
                                            Cerrar sin guardar            
                                        </TipsButton>                                         
                                    </Col>
                                    <Col xs={12} sm={12} xxl={6} xl={6} md={6} lg={6}>
                                        <TipsButton href="#" className="boton block chico amarillo borde10 textoCentro">
                                            Publicar Iniciativa            
                                        </TipsButton>                                         
                                    </Col>
                                </Row>                                                                                                                                       
                            </Form>
                    </Bloque>
                </Row>
            </Container>                       
        </>
        
    );
}
export {QuieroParticipar}