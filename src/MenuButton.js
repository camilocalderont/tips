import React from 'react';
import './MenuButton.css';

function MenuButton(props){
    return (
        <li className="menuItem">
            <a href={props.href} className={ props.active ? 'active' : '' }>
                { props.text[0] } <br/> { props.text[1] }
            </a>
        </li>
    );
}

export {MenuButton}