import React from 'react';
import IconoLogin from "../assets/imagenes/logo_login.png";
import {MenuButton} from "../MenuButton";

import './MenuLogin.css';

function MenuLogin(props){
    return (
        <MenuButton href="#" className="boton grande amarillo login borde50">
            <strong className="textoCentro float-left">
                Quiero <br/> Participar
            </strong>
            <img src={IconoLogin} className="iconoLogin" alt="Inicia sesión en el ambiente digital de la Estratégia TIPS" />
        </MenuButton>  
    );
}
export {MenuLogin}