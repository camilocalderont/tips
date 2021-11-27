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
        titulo:"Nace la primera veeduría cannábica en Colombia", 
        descripcion:"“Regulación desde abajo, regulación en marcha”, es el objeto principal de la primera veeduría en Colombia sobre política pública de sustancias psicoactivas, con énfasis en cannabis (Resolución PDCPL 21-074). Un total de 30 personas, entre las que se encuentran médicos, abogados, agrónomos, comerciantes, biólogos, líderes sociales, madres y padres de familia, quieren demostrarle al Estado que es posible sacar el cannabis del contexto de la calle, el narcotráfico y la inseguridad y, además, reducir los riesgos para la salud.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_5.png",
        fecha: "2021-11-21"
    }                   
];

const eventos = [
    { title: 'Escuela Fontibon', date: '2021-11-10' },
    { title: 'Escuela Bosa', date: '2021-11-24' },
    { title: 'Escuela Suba', date: '2021-12-01' }
];
  
/*
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
*/
function EscuelaDeParticipacion(props){
    return (
        <>
            <Container fluid>
                <Row>
                    <Bloque className="" xs={12} sm={12} xxl={5} xl={5} md={5} lg={5}>
                        <TituloPagina texto="¿Qué es la Escuela de Participación?" />
                            <div className="resumenPagina">
                                <p>¿Quieres aprender y compartir conocimientos y experiencias con personas de otras localidades? Puedes fortalecer tus proyectos de salud en tu comunidad con la Escuela de Innovación y participación social en salud, que te da estas y muchas más herramientas. Podrás tomar cursos virtuales o presenciales que te permitirán impulsar tus conocimientos y los procesos de participación en los que estás, como lo son COPACOS, veedurías ciudadanas, organizaciones ciudadanas, entre otras. Aquí encontrarás cursos como alfabetización digital, huertas caseras, diseño de proyectos ciudadanos, control social, entre otros.</p>
                            </div>
                        <TipsButton href="#" className="boton chico amarillo borde10">
                           Ingresa a la Escuela                 
                        </TipsButton> 
                    </Bloque> 
                    <Bloque xs={12} sm={12} xxl={7} xl={7} md={7} lg={7}  
                        className="bordeAzul sombra" 
                        style={{
                            background: `url(/imagenes/paginas/escuela-de-participacion.png) center top no-repeat`, 
                            backgroundSize: 'cover', 
                            minHeight:"470px"
                        }} 
                              
                    />         
                </Row>  
                <hr className="amarillo" />
                <SeccionParticipacionAlDia noticias={noticias} eventos={eventos} />
            </Container>                       
        </>
        
    );
}
export {EscuelaDeParticipacion}
