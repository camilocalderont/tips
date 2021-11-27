import React from "react";
import { Container, Row } from 'react-bootstrap';
import '../generalPaginas.css';
import { TipsButton } from "../../TipsButton";
import { TituloPagina } from "../../TituloPagina";
import { Bloque } from "../../Bloque";
import { SeccionParticipacionAlDia } from "../../SeccionParticipacionAlDia";
const noticias = [
    { 
        id:"1", 
        titulo:"¡Semilla fuerte crece libre en donde sea!", 
        descripcion:"Luego de hacer nuestra paca biodigestora el pasado 11 de julio, nos reunimos en torno a la semilla. Recordamos los alimentos de nuestros desayunos y pensamos sobre las latitudes de donde provenían y los saberes que se asociaban a nuestros platos más cotidianos. Desde allí replanteamos nuestros hábitos de consumo a partir de la comprensión de la semilla como piedra angular de la subsistencia y la autonomía de los pueblos. Porque una patria nunca va a ser soberana si no es capaz de proveerse sus alimentos.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_7.png",
        fecha: "2021-11-21"
    },
    { 
        id:"2", 
        titulo:"Iniciativas titular 2", 
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper in nulla ut accumsan. Aliquam commodo lectus non nulla varius, vitae porttitor odio dapibus. Nunc posuere enim sem, eget efficitur lectus condimentum in.", 
        href:"#", 
        imagen:"/imagenes/noticias/noticia_1.png",
        fecha: "2021-11-20"
    }                    
];

const eventos = [
    { title: 'Evento Iniciativa Salud', date: '2021-11-13' },
    { title: 'Evento Iniciativa Prevención', date: '2021-11-20' },
    { title: 'Evento Iniciativa LGTBI', date: '2021-12-03' }
];
  
/*
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
*/
function IniciativasCiudadanas(props){
    return (
        <>
            <Container fluid>
                <Row>
                    <Bloque className="" xs={12} sm={12} xxl={5} xl={5} md={5} lg={5}>
                        <TituloPagina texto="¿Qué son y cómo funcionan las iniciativas ciudadanas?" />
                            <div className="resumenPagina">
                                <p>¿Tienes alguna idea o proyecto para mejorar la salud en tu comunidad o en tu ciudad, pero no sabes cómo empezar? Para eso nos encontramos con cientos de personas en las localidades de Bogotá para identificar los principales retos en salud, y partir de ellos, en los laboratorios TIPS, estamos co-creando y promoviendo proyectos que respondan a esas problemáticas, y que den como resultado acciones colectivas para construir una agenda social del cuidado.</p>
                            </div>
                        <TipsButton href="#" className="boton chico amarillo borde10">
                            Banco de iniciativas                     
                        </TipsButton> 
                    </Bloque> 
                    <Bloque xs={12} sm={12} xxl={7} xl={7} md={7} lg={7}  
                        className="" 
                        style={{
                            background: `url(/imagenes/paginas/iniciativas-ciudadanas.png) center top no-repeat`, 
                            backgroundSize: 'cover', 
                            minHeight:"620px"
                        }} 
                              
                    />         
                </Row>  
                <hr className="amarillo" />
                <SeccionParticipacionAlDia noticias={noticias} eventos={eventos} />
            </Container>                       
        </>
        
    );
}
export {IniciativasCiudadanas}
