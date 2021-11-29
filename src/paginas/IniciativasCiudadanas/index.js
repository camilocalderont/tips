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
    //acerca de tips
    { 
        id:"2", 
        titulo:"La salud mental desde cuatro visiones étnicas", 
        descripcion:"Leonardo Fuentes, Sabedor afro para Teusaquillo y Engativá: “El concepto más importante es el nosotros: El somos porque tú eres, somos porque otros fueron. Desde ahí le decimos a cada miembro de la comunidad que son importantes y eso hace que la gente se sienta reconocida y que pertenece a algo, así la persona es productiva para la comunidad, pero sobre todo para ella misma. Sin importar si eres blanco o negro, queremos que el Kilombo sea un espacio diverso y de intercambio de ideas que construyen el tejido que somos. El mejor calmante para el alma es la palabra y la escucha sincera. También tenemos jabones y otras medicinas con plantas, para que las personas se conecten con la naturaleza. Desde la visión Yoruba, al arrancar una planta hablamos con ella y le pedimos permiso. Para la salud mental recomiendo mucho el jengibre, la albahaca y la menta, que ayudan a encontrar la calma”", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_8.jpg",
        fecha: "2021-11-21"
    },
    //promotores
    { 
        id:"3", 
        titulo:"¿Y después de la pandemia qué?", 
        descripcion:"Es común escuchar personas que quisieran borrar el año 2020 de sus vidas, dicen que fue un tiempo perdido y añoran el retorno a la normalidad, incluso algunos hacen planes para “cuando pase la pandemia...”. Pero a un año de que el COVID-19 llegara a Colombia, vale la pena recordar que en esa “normalidad” añorada ya existían varias afectaciones a la salud humana que merecían atención y una alerta, porque también mataban a miles de personas al año. Por ejemplo, según la Secretaría Distrital de Salud, en el año 2019 más de 2.000 personas murieron por enfermedades producidas por la mala calidad de aire de la ciudad, de acuerdo con el periódico El Espectador.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_1.jpg",
        fecha: "2021-11-21"
    },
    { 
        id:"4", 
        titulo:"Nuestro saber ancestral: una política de cuidado", 
        descripcion:"“El plan de vacunación para la comunidad afro en Bogotá es urgente porque gran parte de la población es víctima del conflicto armado y vive en condiciones de marginalidad y hacinamiento, lo que aumenta el índice de contagio. Además, muchas personas no tienen plan de salud como el resto de la población en Bogotá y, por otro lado, una de las enfermedades que caracteriza a nuestra población es la presión arterial", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_3.jpg",
        fecha: "2021-11-20"
    },
    { 
        id:"5", 
        titulo:"Daños ambientales y su efecto en la salud de todas y todos", 
        descripcion:"Bogotá es parte de un ecosistema montañoso diverso que cuenta con cerca de 20 parques ecológicos, 40 áreas forestales y 15 humedales que previenen inundaciones y suministran oxígeno a más de 600 especies de animales y a más de 8 millones de seres humanos que cada vez son más conscientes de la conexión que existe entre su salud y la del planeta.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_4.jpg",
        fecha: "2021-11-20"
    },
    //escuela de participaci[on]
    { 
        id:"6", 
        titulo:"Nace la primera veeduría cannábica en Colombia", 
        descripcion:"“Regulación desde abajo, regulación en marcha”, es el objeto principal de la primera veeduría en Colombia sobre política pública de sustancias psicoactivas, con énfasis en cannabis (Resolución PDCPL 21-074). Un total de 30 personas, entre las que se encuentran médicos, abogados, agrónomos, comerciantes, biólogos, líderes sociales, madres y padres de familia, quieren demostrarle al Estado que es posible sacar el cannabis del contexto de la calle, el narcotráfico y la inseguridad y, además, reducir los riesgos para la salud.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_9.jpg",
        fecha: "2021-11-21"
    },

    //representantes
    { 
        id:"7", 
        titulo:"¡A vigilar las vacunas!", 
        descripcion:"Los procesos de vacunación en el mundo están bajo la lupa pública. Mientras medios de comunicación en Brasil han denunciado a figuras políticas locales cuyos familiares se han saltado la fila para vacunarse contra el COVID-19, en Perú, Argentina y Ecuador cuatro ministros han renunciado o están sien-do investigados por casos de corrupción en los procesos de vacunación. Previniendo este tipo de situaciones, la ciudadanía de Bogotá se organizó y decidió ponerle la lupa a las vacunas bajo el lema “¡todos a cuidarnos y a cuidar las vacunas!”. Se trata de la veeduría ciudadana que vigila el Plan de Vacunación de Bogotá. Desde allí más de 60 ciudadanas y ciudadanos hacen seguimiento, vigilancia y control al proceso de vacunación.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_2.jpg",
        fecha: "2021-11-21"
    },
    { 
        id:"8", 
        titulo:"Centro de Salud Manuela Beltrán: Un sueño que se hace realidad", 
        descripcion:"“Estoy muy satisfecha al ver que lo que ha sido durante mucho tiempo un sueño hoy es una realidad gracias a la persistencia de la comunidad”, expresa Carmen Fernández, vocera de la veeduría al Centro de Salud Manuela Beltrán. Después de 20 años se materializa el centro de salud para esta zona de la localidad de Ciudad Bolívar, con el que se espera atender a más de 40 mil personas.", 
        href:"#", 
        imagen:"/imagenes/noticias/ParticipacionAlDia/Foto_6.png",
        fecha: "2021-11-20"
    }                   
];

const eventos = [
    { title: 'Evento Iniciativa Salud', date: '2021-11-13' },
    { title: 'Evento Iniciativa Prevención', date: '2021-11-20' },
    { title: 'Evento Iniciativa LGTBI', date: '2021-12-03' },
    { title: 'Rendición Cuentas', date: '2021-12-06' }      
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
