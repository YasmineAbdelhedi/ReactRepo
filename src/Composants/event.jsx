import React, { useState, useEffect } from 'react';
import { Card, Col, Button, Alert } from 'react-bootstrap';
import placeholderImage from '../../public/images/placeholder.jpg'; 


const Event = ({ event, onBook }) => {

    const [showAlert, setShowAlert] = useState(false);

    const handleBook = () => {
        onBook(event);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    };
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  src={`/images/${!!event.nbTickets ? event.img : "sold_out.png"}`} alt={event.name} />
                <Card.Body>
                    <Card.Title> <strong> Event name : </strong>{event.name}</Card.Title>
                   
                    <Card.Text>
                        <strong>Price: </strong>${event.price}
                    </Card.Text>
                    <Card.Text>
                        <strong>Number of tickets: </strong>{event.nbTickets}
                    </Card.Text>
                    <Card.Text>
                        <strong>Number of participants: </strong>{event.nbParticipants}
                    </Card.Text>
                   
                </Card.Body>
                <Button 
                        variant="primary" 
                        onClick={handleBook} 
                        disabled={event.nbTickets === 0}
                    >
                        {event.nbTickets === 0 ? 'Sold Out' : 'Book an event'}
                    </Button>
                    {showAlert && <Alert variant="success">You have booked an event</Alert>}

            </Card>
        </Col>
    );
};

export default Event;

