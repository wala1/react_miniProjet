import React, { useState } from 'react';
import { Card , Button } from 'react-bootstrap';
function Product({prod , onBuy}) {
    const [like , setLike] = useState(prod.like);
    const [quantity , setQuantity] = useState(prod.quantity)
    
    const addLike = () => {
        setLike(like +1);
    };
    const updateQuantity = () => {
        setQuantity(quantity - 1);

    }
     return ( <>
    <Card className={prod.like > 5 ? "besProduct" : ""} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("../assets/images/"+prod.img)} />
      <Card.Body>
        <Card.Title> {prod.name}</Card.Title>
        <Card.Text> {prod.description}</Card.Text>
        <Card.Subtitle>Price : {prod.price}</Card.Subtitle>
        <Card.Subtitle>Quantity : {quantity} </Card.Subtitle>
        <Card.Subtitle>Likes : {like} </Card.Subtitle>
        <Button onClick={addLike} variant="primary">Like</Button>
        <Button onClick={() => onBuy(prod , updateQuantity) } disabled={quantity === 0 ? true : false} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </> );
}

export default Product;