import React, { useState } from 'react';
import {Button,Card} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Product(props) {
    const [like , setLike] = useState(props.product.like);
    
    const addLike = (e) => {
        e.preventDefault();
        setLike(like+1);
        console.log(like);
    };
    return ( 
        <>
            <Card  className={like>15 ?  "besProduct" : ""} style={{ width: '18rem'}}>
                <Card.Img variant="top" src={require("../assets/images/"+props.product.img)} />
                <Card.Body>
                    <Link to={`/products/${props.product.name}`}> {props.product.name}</Link>
                    <Card.Subtitle>{props.product.description}</Card.Subtitle>
                    <Card.Subtitle>Price : {props.product.price}</Card.Subtitle>
                    <Card.Subtitle>Qte : {props.product.quantity}</Card.Subtitle>
                    <Card.Subtitle>Likes : {like}</Card.Subtitle>
                    <Button  onClick={addLike} variant="primary">Like</Button>
                    <Button onClick={props.onBuy} disabled={props.product.quantity === 0 ? true : false} variant="primary">Buy</Button>

                </Card.Body>
            </Card>
        </>
     );
}

export default Product;