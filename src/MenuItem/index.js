import React from 'react';
import {MenuButton} from "../MenuButton";
import './MenuItem.css';

function MenuItem(props){
    let clases = `${props.clasesAdicionales} ${ props.active ? 'active' : '' }`;

    return (
        <li className="menuItem">
            <MenuButton href={props.href} className={clases}>
                { props.text[0] } <br/> { props.text[1] }
            </MenuButton>
        </li>
    );
}

export {MenuItem}