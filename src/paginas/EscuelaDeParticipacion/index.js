import React from "react";
import { Container, Row } from 'react-bootstrap';
import '../generalPaginas.css';
import { MenuButton } from "../../MenuButton";
import { TituloPagina } from "../../TituloPagina";
import { Bloque } from "../../Bloque";
import { SeccionParticipacionAlDia } from "../../SeccionParticipacionAlDia";
const noticias = [
    { 
        id:"1", 
        titulo:"Principal Escuela Participación", 
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper in nulla ut accumsan. Aliquam commodo lectus non nulla varius, vitae porttitor odio dapibus. Nunc posuere enim sem, eget efficitur lectus condimentum in.", 
        href:"#", 
        imagen:"/imagenes/noticia_1.png",
        fecha: "2021-11-21"
    },
    { 
        id:"2", 
        titulo:"Escuela titular 2", 
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper in nulla ut accumsan. Aliquam commodo lectus non nulla varius, vitae porttitor odio dapibus. Nunc posuere enim sem, eget efficitur lectus condimentum in.", 
        href:"#", 
        imagen:"/imagenes/noticia_2.png",
        fecha: "2021-11-20"
    },
    { 
        id:"3", 
        titulo:"Escuela titular 3", 
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper in nulla ut accumsan. Aliquam commodo lectus non nulla varius, vitae porttitor odio dapibus. Nunc posuere enim sem, eget efficitur lectus condimentum in.", 
        href:"#", 
        imagen:"/imagenes/noticia_2.png",
        fecha: "2021-11-20"
    }, 
    { 
        id:"4", 
        titulo:"Escuela titular 4", 
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper in nulla ut accumsan. Aliquam commodo lectus non nulla varius, vitae porttitor odio dapibus. Nunc posuere enim sem, eget efficitur lectus condimentum in.", 
        href:"#", 
        imagen:"/imagenes/noticia_2.png",
        fecha: "2021-11-11"
    }, 
    { 
        id:"5", 
        titulo:"Escuela titular 5", 
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper in nulla ut accumsan. Aliquam commodo lectus non nulla varius, vitae porttitor odio dapibus. Nunc posuere enim sem, eget efficitur lectus condimentum in.", 
        href:"#", 
        imagen:"/imagenes/noticia_2.png",
        fecha: "2021-11-10"
    }, 
    { 
        id:"6", 
        titulo:"Escuela titular 6", 
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper in nulla ut accumsan. Aliquam commodo lectus non nulla varius, vitae porttitor odio dapibus. Nunc posuere enim sem, eget efficitur lectus condimentum in.", 
        href:"#", 
        imagen:"/imagenes/noticia_2.png",
        fecha: "2021-11-09"
    },                    
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum at nunc sit amet malesuada. Suspendisse potenti. Aliquam erat volutpat. Mauris vulputate massa nec ipsum eleifend, nec commodo mi congue. In finibus lacus eu blandit congue. Sed elementum tincidunt commodo. Aenean risus felis, ornare quis elementum in, sollicitudin in enim. Integer convallis ut nisl id cursus. Proin tortor turpis, volutpat id aliquet ut, venenatis ut nunc.</p>
                                <p>Etiam a metus commodo, ultricies metus in, luctus lectus. Fusce sed massa sed nulla rhoncus hendrerit. Cras eget diam sed sapien vulputate pulvinar. In hac habitasse platea dictumst. Mauris sagittis felis eu augue ornare luctus. Mauris rutrum tempus felis vitae hendrerit. In mollis ornare nisl, eget porta elit dictum a. Suspendisse potenti. Mauris eget imperdiet libero. Nulla et suscipit tortor.</p>                    
                            </div>
                        <MenuButton href="#" className="boton chico amarillo borde10">
                            Ingresa a la Escuela                     
                        </MenuButton> 
                    </Bloque> 
                    <Bloque className="bordeAzul sombra" xs={12} sm={12} xxl={7} xl={7} md={7} lg={7} style={{height:"470px"}} >
                    </Bloque>         
                </Row>  
                <hr className="amarillo" />
                <SeccionParticipacionAlDia noticias={noticias} />
            </Container>                       
        </>
        
    );
}
export {EscuelaDeParticipacion}
