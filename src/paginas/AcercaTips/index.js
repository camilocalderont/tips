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
        titulo:"La salud mental desde cuatro visiones étnicas", 
        descripcion:"Leonardo Fuentes, Sabedor afro para Teusaquillo y Engativá: “El concepto más importante es el nosotros: El somos porque tú eres, somos porque otros fueron. Desde ahí le decimos a cada miembro de la comunidad que son importantes y eso hace que la gente se sienta reconocida y que pertenece a algo, así la persona es productiva para la comunidad, pero sobre todo para ella misma. Sin importar si eres blanco o negro, queremos que el Kilombo sea un espacio diverso y de intercambio de ideas que construyen el tejido que somos. El mejor calmante para el alma es la palabra y la escucha sincera. También tenemos jabones y otras medicinas con plantas, para que las personas se conecten con la naturaleza. Desde la visión Yoruba, al arrancar una planta hablamos con ella y le pedimos permiso. Para la salud mental recomiendo mucho el jengibre, la albahaca y la menta, que ayudan a encontrar la calma”", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_8.jpg",
        fecha: "2021-11-21"
    },
    { 
        id:"2", 
        titulo:"Ejemplo titular 2", 
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper in nulla ut accumsan. Aliquam commodo lectus non nulla varius, vitae porttitor odio dapibus. Nunc posuere enim sem, eget efficitur lectus condimentum in.", 
        href:"#", 
        imagen:"/imagenes/noticias/noticia_2.png",
        fecha: "2021-11-20"
    }                    
];

const eventos = [
    { title: 'Entrega Tips', date: '2021-11-23' },
    { title: 'Lanzamiento Tips', date: '2021-11-26' }
];
  
/*
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
*/
function AcercaTips(props){
    return (
        <>
            <Container fluid>
                <Row>
                    <Bloque className="" xs={12} sm={12} xxl={5} xl={5} md={5} lg={5}>
                        <TituloPagina texto="¿Qué es TIPS?" />
                            <div className="resumenPagina">
                                <p><strong>TIPS, Territorios de Innovación y Participación en Salud</strong></p>
                                <p>Tus ideas y tus propuestas sobre salud se hacen realidad en TIPS - Bogotá. Estamos creando nuevas formas para que participes en salud. Aquí no solo te escuchamos, sino que, junto a ti construimos proyectos comunitarios y aprendemos juntas y juntos buscando prevenir y corregir procesos que afectan tu salud, la de tu comunidad y la de cada territorio de la Bogotá-Región. En TIPS la ciudadanía es la protagonista de los cambios que necesitamos para tener una salud integral.</p>                    
                            </div>
                        <TipsButton href="#" className="boton chico amarillo borde10">
                            ¿Qué puedo hacer en Tips?                      
                        </TipsButton> 
                    </Bloque> 
                    <Bloque xs={12} sm={12} xxl={7} xl={7} md={7} lg={7}  
                        className="bordeAzul p-0 sombra" 
                        style={{
                            maxHeight:"400px"
                        }} 
                              
                    >  
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/ddJmQ1CvQIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                    
                    </Bloque>    
                </Row>  
                <hr className="amarillo" />
                <SeccionParticipacionAlDia noticias={noticias} eventos={eventos} />
            </Container>                       
        </>
        
    );
}
export {AcercaTips}