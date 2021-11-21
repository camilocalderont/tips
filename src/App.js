import React from 'react';
import { Header } from "./Header";
import { Footer } from './Footer';
import { Body } from './Body';
import { ContenidoTips } from './ContenidoTips';

function App(props) {
  return (
    //Es equivalente a <React.Fragment>
    <>
      <Header />
      <Body>
        <ContenidoTips />        
      </Body>
      <Footer />

    </>
  );
}

export default App;
