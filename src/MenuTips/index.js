import React from 'react';
import './MenuTips.css';

function MenuTips(props){
    let clases = `menuTips ${props.clasesAdicionales}`
    return ( 
        <ul className={clases} id={props.id}>{props.children}</ul>
    );
}

export {MenuTips}