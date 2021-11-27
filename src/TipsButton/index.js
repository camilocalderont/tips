import React from 'react';
import './TipsButton.css';

function TipsButton(props){
    const { href,className } = props;
    const onClickButton = (event) =>{
        //
    }; 
    let clases = `boton ${className}`;   
    return (
        <a href={href} className={clases}  onClick={onClickButton}>
            { props.children }
        </a>
    );
}

export {TipsButton}