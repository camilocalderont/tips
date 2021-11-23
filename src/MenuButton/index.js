import React from 'react';
import './MenuButton.css';

function MenuButton(props){
    const onClickButton = () =>{
        //alert('Aqui entra alert');
    };
    let clases = `boton ${props.className}`;   
    return (
        <a href={props.href} className={clases} onClick={onClickButton}>
            { props.children }
        </a>
    );
}

export {MenuButton}