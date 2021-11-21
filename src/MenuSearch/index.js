import React from 'react';
import {InputGroup, FormControl } from 'react-bootstrap';
import IconoBuscar from "../assets/imagenes/icono_buscar.png";

import './MenuSearch.css';

function MenuSearch(props){
    return (
        <div className="contenedorBusqueda">
            <label  className="labelBusqueda">Buscar</label>
            <InputGroup className="campoBusqueda">
                <FormControl
                placeholder="..."
                aria-label="..."
                aria-describedby="contenedorBoton"
                />
                <InputGroup.Text id="contenedorBoton">
                    <button id="buscarEnSitio">
                        <img src={IconoBuscar} alt="Buscar dentro del ambiente digital de la Estratégia TIPS"  />
                    </button>
                </InputGroup.Text>
            </InputGroup>
        </div>
    );
}

export {MenuSearch}