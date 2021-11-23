import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LogoPrincipalTips from "../assets/imagenes/logo_principal.png";
import IconoInstagram from "../assets/imagenes/logo_instagram.png";
import IconoFacebook from "../assets/imagenes/logo_facebook.png";
import IconoTwitter from "../assets/imagenes/logo_twitter.png";
import IconoYoutube from "../assets/imagenes/logo_youtube.png";

import { MenuTips } from "../MenuTips";
import { MenuItem } from "../MenuItem";
import { MenuLogin } from "../MenuLogin";
import { MenuSearch } from '../MenuSearch';

import './Header.css';



function  Header(props){
    const {menuButtons} = props;
    return (
        <>
            <Container fluid className="header">
                <Row className="rowAlineadoCenter">
                    <Col md={2} lg={2} xl={2} xxl={2}>
                        <img src={LogoPrincipalTips} alt="Logo Principal Estratégia TIPS" id="logoPrincipal" />
                    </Col> 
                    <Col md={7} lg={7} xl={7} xxl={7}>
                        <h1 className="tituloHeader">
                            Territorios de Innovación y <br /> 
                            <span className="resaltado">Participación en Salud</span>
                        </h1>
                        <p  className="subTituloHeader">
                            Subsecretaría de Gestión Territorial, Participación y Servicio a la Ciudadanía <br/>
                            Secretaría Distrital de Salud
                        </p>
                    </Col>
                    <Col md={3} lg={3} xl={3} xxl={3}>
                        <MenuTips clasesAdicionales="float-right" id="contenedorRedes"> 
                            <li><a target="_blank" rel="noreferrer" href="https://instagram.com"><img src={IconoInstagram} alt="Logo Instagram - Estratégia TIPS" width="35px"  /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://facebook.com"><img src={IconoFacebook} alt="Logo Facebook - Estratégia TIPS" width="35px"  /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://twitter.com"><img src={IconoTwitter} alt="Logo Twitter - Estratégia TIPS" width="35px"  /></a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://youtube.com"><img src={IconoYoutube} alt="Logo Youtube - Estratégia TIPS" width="35px"  /></a></li>
                        </MenuTips>
                    </Col>
                </Row>
                <Row className="mt-1em">
                    <Col xs={12} sm={12} xxl={12} xl={12} md={12} lg={12} id="menuContainer">
                        <MenuTips clasesAdicionales="contenedorMenu">
                            { menuButtons.map( menu => (
                                <MenuItem key={menu.id} text={menu.text} href={menu.href} active={menu.active} clasesAdicionales="grande azul menuPrincipal borde50 textoCentro" />
                            ))}
                        </MenuTips> 
                        <MenuSearch />
                        <MenuLogin />                                                                     
                    </Col>
                </Row>                 
            </Container>            
        </>
        
    );

}


export {Header}