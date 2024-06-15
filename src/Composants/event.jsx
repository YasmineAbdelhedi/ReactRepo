import React, { useState } from 'react';
import { Card, Col, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Event = (prop) => {


  const [event, setEvent] = useState(prop.event);
    const [like, setLike] = useState(true);

    const handleBook = () => {
      prop.showAlerte();
        if (event.nbTickets > 0) {
            setEvent({
                ...event,
                nbTickets: event.nbTickets - 1,
                nbParticipants: event.nbParticipants + 1
            });
        } 
    };
    const handleLike = () => {
        setEvent({
            ...event,
            like: !event.like 
        }); 
    }



    return (
        <Col>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={`/images/${event.nbTickets > 0 ? event.img : "sold_out.png"}`} alt={event.name} />
                <Card.Body>
                  <Link to ={`/event/${event.id}`} >  <Card.Title><strong> </strong>{event.name}</Card.Title> </Link>
                    <Card.Text>
                        <strong>Price: </strong>${event.price}
                    </Card.Text>
                    <Card.Text>
                        <strong>Number of tickets: </strong>{event.nbTickets}
                    </Card.Text>
                    <Card.Text>
                        <strong>Number of participants: </strong>{event.nbParticipants}
                    </Card.Text>
               
                <Button 
                    variant="primary" 
                    onClick={handleBook} 
                    disabled={event.nbTickets === 0}
                >
                    {event.nbTickets === 0 ? 'Sold Out' : 'Book an event'}
                </Button > 
                <Button onClick={handleLike}  className="mx-2 "
 > 
                    {event.like ? 'dislike' : 'like' }
            </Button>
            <Button variant="success">
            <Link
              to={`/events/update/${event.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Update
            </Link>
          </Button>
          <Button
            variant="danger"
            onClick={() => prop.onDelete(event.id)}
            className="mx-5"
          >
            Delete
          </Button>

            </Card.Body>
            </Card>
         
        </Col>

    );
};

export default Event;
