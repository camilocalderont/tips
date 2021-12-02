import React from 'react';
import { Header } from "./Header";
import { Footer } from './Footer';
import { Body } from './Body';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { AcercaTips } from './paginas/AcercaTips';
import { PromotoresDelCuidado } from './paginas/PromotoresDelCuidado';
import { EscuelaDeParticipacion } from './paginas/EscuelaDeParticipacion';
import { IniciativasCiudadanas } from './paginas/IniciativasCiudadanas';
import { RepresentantesDeLaSalud } from './paginas/RepresentantesDeLaSalud';
import { QuieroParticipar } from './paginas/QuieroParticipar';
const menuButtons = [
  { id:"1", text:["Acerca de","Tips"], href:"/acerca-de-tips", active: false},
  { id:"2", text:["Promotores","del Cuidado"], href:"/promotores-del-cuidado", active: false},
  { id:"3", text:["Escuela de","Participación"], href:"/escuela-de-participacion", active: false},
  { id:"4", text:["Iniciativas","Ciudadanas"], href:"/iniciativas-ciudadanas", active: false},
  { id:"5", text:["Represetantes de la","Ciudadanía en Salud"], href:"/representantes-de-la-ciudadania-en-salud", active: false}
];


function App(props) {
  let menus;

  const localStorageMenu = localStorage.getItem('MENUS_V1');
  if(!localStorageMenu){
    localStorage.setItem('MENUS_V1',JSON.stringify(menuButtons));
    menus = menuButtons;
  }else{
    menus = JSON.parse(localStorageMenu);
  }
  const [ menuEstados, setMenuEstados] = React.useState(menus);

  return (
    //Es equivalente a <React.Fragment>
    <>
      <Header menuButtons={menuEstados} setMenuEstados={setMenuEstados}  />
      <Body> 
        <BrowserRouter>
          <Routes>

              <Route path="acerca-de-tips" element={<AcercaTips />} />      
              <Route path="promotores-del-cuidado" element={<PromotoresDelCuidado />} /> 
              <Route path="escuela-de-participacion" element={<EscuelaDeParticipacion />} />
              <Route path="iniciativas-ciudadanas" element={<IniciativasCiudadanas />} />
              <Route path="representantes-de-la-ciudadania-en-salud" element={<RepresentantesDeLaSalud />} />            
              <Route path="quiero-participar" element={<QuieroParticipar />} />     
              <Route path="/" element={<AcercaTips />} /> 
          </Routes>  
        </BrowserRouter>  
      </Body>
      <Footer />
    </>
  );
}
export default App;
