import React from 'react';
import { Row, Col } from "antd";
import LogoPrincipalTips from "./assets/imagenes/logo_principal.png";
import IconoInstagram from "./assets/imagenes/logo_instagram.png";
import IconoFacebook from "./assets/imagenes/logo_facebook.png";
import IconoTwitter from "./assets/imagenes/logo_twitter.png";
import IconoYoutube from "./assets/imagenes/logo_youtube.png";
import { MenuTips } from "./MenuTips";
import { MenuButton } from "./MenuButton";

import 'antd/dist/antd.css';
import './Header.css';


const menuButtons = [
  { id:"1", text:["Acerca de","Tips"], href:"#", active: true},
  { id:"2", text:["Promotores","del Cuidado"], href:"#", active: false},
  { id:"3", text:["Escuela de","Participación"], href:"#", active: false},
  { id:"4", text:["Iniciativas","Ciudadanas"], href:"#", active: false},
  { id:"5", text:["Represetantes de la","Ciudadanía en Salud"], href:"#", active: false}
];


function  Header(){

    return (
        <>
            <header >
                <Row className="rowAlineadoBotton ml-1em mr-1em pt-1em ">                    
                    <Col span={4}>
                        <img src={LogoPrincipalTips} alt="Logo Principal Estratégia TIPS" width="85%" style={{margin: "0 auto"}} />
                    </Col>
                    <Col span={16}  >
                        <h1 className="tituloHeader">
                            Territorios de Innovación y <br /> 
                            Participación en Salud
                        </h1>
                        <p  className="subTituloHeader">
                            Subsecretaría de Gestión Territorial, Participación y Servicio a la Ciudadanía <br/>
                            Secretaría Distrital de Salud
                        </p>
                    </Col>
                    <Col span={4}>
                        <MenuTips clasesAdicionales="float-right">
                            <li><a href="https://instagram.com"><img src={IconoInstagram} alt="Logo Instagram - Estratégia TIPS" width="35px"  /></a></li>
                            <li><a href="https://facebook.com"><img src={IconoFacebook} alt="Logo Facebook - Estratégia TIPS" width="35px"  /></a></li>
                            <li><a href="https://twitter.com"><img src={IconoTwitter} alt="Logo Twitter - Estratégia TIPS" width="35px"  /></a></li>
                            <li><a href="https://youtube.com"><img src={IconoYoutube} alt="Logo Youtube - Estratégia TIPS" width="35px"  /></a></li>
                        </MenuTips>
                    </Col>
                </Row>
                
                <Row className="ml-1em mr-1em pt-1em">
                    <Col span={15}>
                        <MenuTips>
                            { menuButtons.map( menu => (
                                <MenuButton key={menu.id} text={menu.text} href={menu.href} active={menu.active} />
                            ))}
                        </MenuTips>                        
                    </Col>
                    <Col span={5}>
                        <div className="contenedorBusqueda">
                            <label  className="labelBusqueda">Buscar</label>
                            <input type="text" className="campoBusqueda"  />
                        </div>
                    </Col>
                    <Col span={4}>

                    </Col>
                </Row>              
            </header>
        </>
        
    );
}


export {Header}