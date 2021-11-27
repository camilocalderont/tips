import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../generalPaginas.css';
import { TipsButton } from "../../TipsButton";
import { TituloPagina } from "../../TituloPagina";
import { Bloque } from "../../Bloque";
import { SeccionParticipacionAlDia } from "../../SeccionParticipacionAlDia";
const noticias = [
    { 
        id:"1", 
        titulo:"¡A vigilar las vacunas!", 
        descripcion:"Los procesos de vacunación en el mundo están bajo la lupa pública. Mientras medios de comunicación en Brasil han denunciado a figuras políticas locales cuyos familiares se han saltado la fila para vacunarse contra el COVID-19, en Perú, Argentina y Ecuador cuatro ministros han renunciado o están sien-do investigados por casos de corrupción en los procesos de vacunación. Previniendo este tipo de situaciones, la ciudadanía de Bogotá se organizó y decidió ponerle la lupa a las vacunas bajo el lema “¡todos a cuidarnos y a cuidar las vacunas!”. Se trata de la veeduría ciudadana que vigila el Plan de Vacunación de Bogotá. Desde allí más de 60 ciudadanas y ciudadanos hacen seguimiento, vigilancia y control al proceso de vacunación.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_2.jpg",
        fecha: "2021-11-21"
    },
    { 
        id:"2", 
        titulo:"Centro de Salud Manuela Beltrán: Un sueño que se hace realidad", 
        descripcion:"“Estoy muy satisfecha al ver que lo que ha sido durante mucho tiempo un sueño hoy es una realidad gracias a la persistencia de la comunidad”, expresa Carmen Fernández, vocera de la veeduría al Centro de Salud Manuela Beltrán. Después de 20 años se materializa el centro de salud para esta zona de la localidad de Ciudad Bolívar, con el que se espera atender a más de 40 mil personas.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_6.png",
        fecha: "2021-11-20"
    }                    
];

const eventos = [
    { title: 'Evento Participantes Fontibon', date: '2021-11-08' },
    { title: 'Evento Participantes Bosa', date: '2021-11-26' },
    { title: 'Evento Participantes Suba', date: '2021-12-04' }
];
  
/*
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
*/
function RepresentantesDeLaSalud(props){
    return (
        <>
            <Container fluid>
                <Row>
                    <Bloque className="" xs={12} sm={12} xxl={5} xl={5} md={5} lg={5}>
                        <TituloPagina texto="¿Qué son y cómo participar en los espacios e instancias en salud?" />
                            <div className="resumenPagina">
                                <p>¿Sabías que cuentas con el apoyo personas que te representan y defienden tus derechos en salud? En cada territorio de Bogotá hay líderes y lideresas que representan y defienden tu derecho a la salud. Ellas y ellos hacen parte de las ‘Instancias de participación en salud’ donde lideran procesos para que el sector salud garantice todos los servicios en salud para ti y tu comunidad. Algunas de estas instancias son:</p>
                            </div>
                        <Row>
                            <Col>        
                                <TipsButton href="#" className="boton textoCentro chico block amarillo borde10">
                                Asociaciones de Usuario                
                                </TipsButton> 
                                <TipsButton href="#" className="boton textoCentro chico block amarillo borde10 mt-1em">
                                Veedurías Ciudadanas             
                                </TipsButton> 
                            </Col>
                            <Col> 
                                <TipsButton href="#" className="boton textoCentro chico block amarillo borde10">
                                COPACOS                
                                </TipsButton> 
                                <TipsButton href="#" className="boton textoCentro chico block amarillo borde10 mt-1em">
                                Caja de Herramientas                 
                                </TipsButton> 
                            </Col>                                                                                                    
                        </Row>
                    </Bloque> 
                    <Bloque xs={12} sm={12} xxl={7} xl={7} md={7} lg={7}  
                        className="" 
                        style={{
                            background: `url(/imagenes/paginas/representantes-de-la-salud.png) center top no-repeat`, 
                            backgroundSize: 'cover', 
                            minHeight:"600px"
                        }} 
                              
                    />         
                </Row>  
                <hr className="amarillo" />
                <SeccionParticipacionAlDia noticias={noticias} eventos={eventos} />
            </Container>                       
        </>
        
    );
}
export {RepresentantesDeLaSalud}
