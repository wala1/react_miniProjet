import React, { Component } from 'react';
import { Card , Button } from 'react-bootstrap';

class Product extends Component {
    state = {
        product :  this.props.prod,
      } 
    addLike = () => {
        console.log("like"+this.state.product.like);
        this.setState((oldState) => ({
            product : {
                ...oldState.product, like : oldState.product.like +1
            },

        }));

    };
    updateQuantity = (newQuantity) => {
        this.setState((prevState) => ({
          product: { ...prevState.product,
                     quantity: newQuantity },
        }));
      };
    render() { 
        return (<>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require("../assets/images/"+this.props.prod.img)} />
      <Card.Body>
        <Card.Title>{this.props.prod.name}</Card.Title>
        <Card.Text> {this.props.prod.description}</Card.Text>
        <Card.Subtitle>Price : { this.props.prod.price}</Card.Subtitle>
        <Card.Subtitle>Quantity : {this.state.product.quantity}</Card.Subtitle>
        <Card.Subtitle>Likes : {this.state.product.like}</Card.Subtitle>
        <Button onClick={this.addLike} variant="primary">Like</Button>
        <Button onClick={()=>this.props.onBuy(this.state.product,this.updateQuantity)} disabled={this.state.product.quantity === 0 ? true : false} variant="primary">Buy</Button>
      </Card.Body>
    </Card>
        
        </>);
    }
}
 
export default Product;