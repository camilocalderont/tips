import React from 'react';
import {MenuButton} from "../MenuButton";
import './MenuItem.css';

function MenuItem(props){
    const { menu, menuButtons, setMenuEstados, clasesAdicionales  } = props;
    let clases = `${clasesAdicionales} ${menu.active ? 'active' : '' }`;
    return (
        <li className="menuItem">
            <MenuButton 
                menu={menu}   
                menuButtons={menuButtons}   
                setMenuEstados={setMenuEstados}           
                className={clases}
                >
                { menu.text[0] } <br/> { menu.text[1] }
            </MenuButton>
        </li>
    );
}

export {MenuItem}