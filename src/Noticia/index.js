import React from "react";
import { NoticiaPrincipal } from "./NoticiaPrincipal";
import { NoticiaSecundaria } from "./NoticiaSecundaria";
import './Noticia.css';

function Noticia(props){
    let {noticia} = props;

    if (props.principal) {
        return <NoticiaPrincipal noticia={noticia} />                             
    }else{
        return <NoticiaSecundaria noticia={noticia} />
    }
}

export {Noticia}