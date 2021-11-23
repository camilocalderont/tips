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
//import { EscuelaDeParticipacion } from './paginas/EscuelaDEParticipacion';
const menuButtons = [
  { id:"1", text:["Acerca de","Tips"], href:"/acerca-de-tips", active: true},
  { id:"2", text:["Promotores","del Cuidado"], href:"/promotores-del-cuidado", active: false},
  { id:"3", text:["Escuela de","Participación"], href:"/escuela-de-participacion", active: false},
  { id:"4", text:["Iniciativas","Ciudadanas"], href:"/iniciativas-ciudadanas", active: false},
  { id:"5", text:["Represetantes de la","Ciudadanía en Salud"], href:"/representantes-de-la-ciudadania-en-salud", active: false}
];


function App(props) {
  return (
    //Es equivalente a <React.Fragment>
    <>
      <Header menuButtons={menuButtons} />
      <Body> 
        <BrowserRouter>
          <Routes>
            <Route path="/acerca-de-tips" element={<AcercaTips />} />      
            <Route path="/promotores-del-cuidado" element={<PromotoresDelCuidado />} /> 
            {/*<Route path="/escuela-de-participacion" element={<EscuelaDeParticipacion />} /> */}
            
          </Routes>  
        </BrowserRouter>  
      </Body>
      <Footer />
    </>
  );
}
export default App;
