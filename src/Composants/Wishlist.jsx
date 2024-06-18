import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromWishlist, selectWishlist, updateWishlistItem, selectTotalPrice } from "../redux/slices/wishlistSlice";
import { Card, Button, Col, Row, Form } from "react-bootstrap";

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector(selectWishlist);
    const totalPrice = useSelector(selectTotalPrice);

    const handleRemove = (id) => {
        dispatch(removeItemFromWishlist(id));
    };

    const handleNumTicketsChange = (id, event) => {
        const numTickets = parseInt(event.target.value);
        dispatch(updateWishlistItem({ id, numTickets }));
    };

    return (
        <div>
            <h2>Wishlist</h2>
            <Row>
                {wishlist.map((event) => (
                    <Col key={event.id} md={12} className="mb-3">
                        <Card>
                            <Row className="align-items-center">
                                <Col md={3}>
                                    <Card.Img variant="top" src={`/images/${event.img}`} />
                                </Col>
                                <Col md={9}>
                                    <Card.Body>
                                        <Card.Title>{event.name}</Card.Title>
                                        <Card.Text>
                                            <strong>Price: </strong>${event.price}
                                        </Card.Text>
                                        <Form.Group controlId={`numTickets-${event.id}`}>
                                            <Form.Label><strong>Number of tickets:</strong></Form.Label>
                                            <Form.Control
                                                type="number"
                                                min="1"
                                                value={event.numTickets}
                                                onChange={(e) => handleNumTicketsChange(event.id, e)}
                                            />
                                        </Form.Group>
                                        <Card.Text>
                                            <strong>Total Price: </strong>${event.totalPrice}
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => handleRemove(event.id)}>
                                            Remove
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h3 className="mt-3">Total Price of All Events: ${totalPrice}</h3>
        </div>
    );
};

export default Wishlist;
