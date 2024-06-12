import React, { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import Event from '../Composants/event';
import eventsData from '../data/events.json';
import { Alert } from 'react-bootstrap';

const Events = () => {
    const [events, setEvents] = useState(eventsData);
    const [showWelcome, setShowWelcome] = useState(false);

    useEffect(() => {
        // ComponentDidMount
        console.log('Component did mount');
        setShowWelcome(true);
        
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 3000);

        return () => {
            // ComponentWillUnmount
            console.log('Component will unmount');
            clearTimeout(timer);
        };
    }, []);

    return (
        <Row>

  {showWelcome && (
                <Alert variant="success">
                    Bienvenue! Découvrez nos événements!
                </Alert>
            )}
            {events.map((event, index) => (
                <Event key={index} event={event} 
                />

                
            ))}
        </Row>
    );
};

export default Events;
