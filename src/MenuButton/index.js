import React from 'react';


function MenuButton(props){
    const { menu, menuButtons, className, setMenuEstados } = props;
    const onClickButton = (event) =>{

        let estaActivo = menu.active;
        const menuIndex = menuButtons.findIndex(menuItem => menuItem.id === menu.id);
        //duplico el menu y convierto el estado en falso
        const nuevoMenu = menuButtons.map(function(element) {
            element.active = false;
            return element;
        });
        //hago toogle al active y guardo el estado y la variable de localStorage
        nuevoMenu[menuIndex].active = !estaActivo;
        setMenuEstados(nuevoMenu);
        localStorage.setItem('MENUS_V1',JSON.stringify(nuevoMenu));
    }; 
    let clases = `boton ${className}`;   
    return (
        <a href={menu.href} className={clases}  onClick={onClickButton}>
            { props.children }
        </a>
    );
}

export {MenuButton}