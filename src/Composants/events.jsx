import React, { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import Event from '../Composants/event';
import { Alert,Container } from 'react-bootstrap';
import { deleteEvent, getallEvents } from "../services/api";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [showWelcome, setShowWelcome] = useState(false);
    const [alertShowing, setAlertShowing] = useState(false);

    // const [eventData, setEventData] = useState([]);

    useEffect(()=> {
        const fetchEvents = async () => {
                const eventsResult = await getallEvents();
                setEvents(eventsResult.data);
              };
              fetchEvents();
    },[]

    );

    const handleDelete = async (eventId) => {
        await deleteEvent(eventId);
     
      };

      
    const showAlert = () => {
        setAlertShowing(true);
        setTimeout(() => {
          setAlertShowing(false);
        }, 2000);
      };
    
    useEffect(() => {
        // ComponentDidMount
        // console.log('Component did mount');
        setShowWelcome(true);
        
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 3000);

        return () => {
            // ComponentWillUnmount
            // console.log('Component will unmount');
            clearTimeout(timer);
        };
    }, []);
    

    return (
        <Container style={{ marginTop: "30px" }}>

        <Row>

  {showWelcome && (
                <Alert variant="success">
                    Bienvenue! Découvrez nos événements!
                </Alert>
            )}
            {events.map((event, index) => (
                <Event key={index} 
                event={event} 
                showAlerte={showAlert}
                onDelete={handleDelete}
                
                />

                
            ))}
                            { alertShowing && <Alert variant="success">You have booked an event</Alert>}

        </Row>  </Container>
    );
};

export default Events;
