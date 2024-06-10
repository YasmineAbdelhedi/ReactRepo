import React, { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import Event from '../Composants/event';
import eventsData from '../data/events.json';
const Events = () => {
    const [events, setEvents] = useState(eventsData);

    const handleBook = (bookedEvent) => {
        setEvents(events.map(event => 
            event.name === bookedEvent.name 
                ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 } 
                : event
        ));
    };
    return (
        
        <Row>
            {events.map((event, index) => (
                <Event key={index} event={event} onBook={handleBook} 
                />

                
            ))}
        </Row>
    );
};

export default Events;
