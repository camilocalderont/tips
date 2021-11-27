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
        titulo:"¿Y después de la pandemia qué?", 
        descripcion:"Es común escuchar personas que quisieran borrar el año 2020 de sus vidas, dicen que fue un tiempo perdido y añoran el retorno a la normalidad, incluso algunos hacen planes para “cuando pase la pandemia...”. Pero a un año de que el COVID-19 llegara a Colombia, vale la pena recordar que en esa “normalidad” añorada ya existían varias afectaciones a la salud humana que merecían atención y una alerta, porque también mataban a miles de personas al año. Por ejemplo, según la Secretaría Distrital de Salud, en el año 2019 más de 2.000 personas murieron por enfermedades producidas por la mala calidad de aire de la ciudad, de acuerdo con el periódico El Espectador.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_1.jpg",
        fecha: "2021-11-21"
    },
    { 
        id:"2", 
        titulo:"Nuestro saber ancestral: una política de cuidado", 
        descripcion:"“El plan de vacunación para la comunidad afro en Bogotá es urgente porque gran parte de la población es víctima del conflicto armado y vive en condiciones de marginalidad y hacinamiento, lo que aumenta el índice de contagio. Además, muchas personas no tienen plan de salud como el resto de la población en Bogotá y, por otro lado, una de las enfermedades que caracteriza a nuestra población es la presión arterial", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_3.jpg",
        fecha: "2021-11-20"
    },
    { 
        id:"3", 
        titulo:"Daños ambientales y su efecto en la salud de todas y todos", 
        descripcion:"Bogotá es parte de un ecosistema montañoso diverso que cuenta con cerca de 20 parques ecológicos, 40 áreas forestales y 15 humedales que previenen inundaciones y suministran oxígeno a más de 600 especies de animales y a más de 8 millones de seres humanos que cada vez son más conscientes de la conexión que existe entre su salud y la del planeta.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_4.jpg",
        fecha: "2021-11-20"
    }                 
];

const eventos = [
    { title: 'Reunión Promotores', date: '2021-11-15' },
    { title: 'Reunión 2 Promotores', date: '2021-11-30' },
    { title: 'Reunión 3 Promotores', date: '2021-12-15' }
];
  
/*
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
*/
function PromotoresDelCuidado(props){
    return (
        <>
            <Container fluid>
                <Row>
                    <Bloque className="" xs={12} sm={12} xxl={5} xl={5} md={5} lg={5}>
                        <TituloPagina texto="¿Qué es un/a Promotor/a del Cuidado?" />
                            <div className="resumenPagina">
                                <p>Cuando cuidas a un ser querido, a tu perro o a tu gato, o el lugar en el que vives, y además lo haces con todo tu compromiso, eres un/a Promotor del Cuidado. Eso quiere decir que puedes hacer parte de la apuesta de la Secretaría Distrital de Salud que busca promover, intercambiar y aprender sobre las prácticas de cuidado que realizamos a diario y en diferentes espacios. ¡Así también construimos una Bogotá cuidadora!</p>
                            </div>
                        <TipsButton href="#" className="boton chico amarillo borde10">
                            ¿Quiero ser un/a Promotor?                      
                        </TipsButton> 
                    </Bloque> 
                    <Bloque xs={12} sm={12} xxl={7} xl={7} md={7} lg={7}  
                        className="bordeAzul p-0 sombra" 
                        style={{
                            maxHeight:"400px"
                        }}                               
                    >
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/w9_g49O6_V0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                        
                    </Bloque>         
                </Row>  
                <hr className="amarillo" />
                <SeccionParticipacionAlDia noticias={noticias} eventos={eventos} />
            </Container>                       
        </>
        
    );
}
export {PromotoresDelCuidado}