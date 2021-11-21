import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './Body.css';

function Body(props){
    return (
        <>
            <Container fluid >
                <Row>
                    <Col xs={12} sm={12} xxl={12} xl={12} md={12} lg={12}  >                        
                        <div id="contenedorBody">
                            {props.children}
                        </div>
                    </Col>                   
                </Row>                 
            </Container>            
        </>
        
    );
} 
export {Body}