import React from "react";
import { Container, Row } from 'react-bootstrap';
import { Noticias } from "../Noticias";
import { Bloque } from "../Bloque";
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import './FullCalendar.css';
  
/*
  const handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
*/
function SeccionParticipacionAlDia(props){
    const { noticias, eventos } = props;
    return (
        <>
            <Container fluid>
                <Row>
                    <Noticias xs={12} sm={12} xxl={5} xl={5} md={5} lg={5} noticias={noticias} />

                    <Bloque className="bordeAzul sombra pt-40" xs={12} sm={12} xxl={7} xl={7} md={7} lg={7}  >
                        <FullCalendar
                            plugins={[ dayGridPlugin  ]}
                            initialView="dayGridMonth"
                            locale="es"
                            events={eventos}                            
                        />                 
                    </Bloque>                      
                </Row>
            </Container>                       
        </>
        
    );
}
export {SeccionParticipacionAlDia}