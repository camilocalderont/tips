import React from 'react';
import './MenuButton.css';

function MenuButton(props){
    let clases = `boton ${props.className}`;   
    return (
        <a href={props.href} className={clases}>
            { props.children }
        </a>
    );
}

export {MenuButton}