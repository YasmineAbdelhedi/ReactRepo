import React, { useState, useEffect } from 'react';
import { Card, Col, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { updateEventReducer } from "../redux/slices/eventsSlice";
import { editEvent } from "../services/api"; 
import { addItemToWishlist, removeItemFromWishlist } from "../redux/slices/wishlistSlice";

const Event = (prop) => {


  // const [event, setEvent] = useState(prop.event);
  //   const [like, setLike] = useState(true);
    const [localEvent, setLocalEvent] = useState(prop.event);
    const dispatch = useDispatch();

    useEffect(() => {
      setLocalEvent(prop.event);
    }, [prop.event]);
  
    const handleBook = async () => {
      prop.showAlerte();
      if (localEvent.nbTickets > 0) {
        const updatedEvent = {
          ...localEvent,
          nbTickets: localEvent.nbTickets - 1,
          nbParticipants: localEvent.nbParticipants + 1,
        };
        setLocalEvent(updatedEvent);
        dispatch(updateEventReducer(updatedEvent));
        await editEvent(updatedEvent.id, updatedEvent);  // Call the API to update the event
      }
    };
  
    const handleLike = async () => {
      const updatedEvent = { ...localEvent, like: !localEvent.like };
      setLocalEvent(updatedEvent);
      dispatch(updateEventReducer(updatedEvent));
      await editEvent(updatedEvent.id, updatedEvent);  // Call the API to update the event
    };

    const handleAddToWishlist = () => {
      dispatch(addItemToWishlist(localEvent));
    };

    const handleRemoveFromWishlist = () => {
      dispatch(removeItemFromWishlist(localEvent.id));
    };

    return (
        <Col>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={`/images/${localEvent.nbTickets > 0 ? localEvent.img : "sold_out.png"}`} alt={localEvent.name} />
                <Card.Body>
                  <Link to ={`/event/${localEvent.id}`} >  <Card.Title><strong> </strong>{localEvent.name}</Card.Title> </Link>
                    <Card.Text>
                        <strong>Price: </strong>${localEvent.price}
                    </Card.Text>
                    <Card.Text>
                        <strong>Number of tickets: </strong>{localEvent.nbTickets}
                    </Card.Text>
                    <Card.Text>
                        <strong>Number of participants: </strong>{localEvent.nbParticipants}
                    </Card.Text>
               
                <Button 
                    variant="primary" 
                    onClick={handleBook} 
                    disabled={localEvent.nbTickets === 0}
                >
                    {localEvent.nbTickets === 0 ? 'Sold Out' : 'Book an event'}
                </Button > 
                <Button onClick={handleLike}  className="mx-2 "
 > 
                    {localEvent.like ? 'dislike' : 'like' }
            </Button>
            <Button variant="success">
            <Link
              to={`/events/update/${localEvent.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Update
            </Link>
          </Button>
          <Button
            variant="danger"
            onClick={() => prop.onDelete(localEvent.id)}
            className="mx-5"
          >
            Delete
          </Button>

          <Button variant="warning" onClick={handleAddToWishlist} className="mx-2">

           + Add to wishlist
          </Button>
         
                <Button variant="danger" onClick={handleRemoveFromWishlist} className="mx-2">
                    Remove from Wishlist
                </Button>
            </Card.Body>
            </Card>
         
        </Col>

    );
};

export default Event;
