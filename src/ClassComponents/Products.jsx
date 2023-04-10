import React, { Component } from 'react';
import Product from './Product';
import productsJson from '../products.json';
import { Alert, Container, Row } from 'react-bootstrap';
class Products extends Component {
    state = {
        showAlert : false,
        showWelcome : true
     } 
     
     handleBuy = (product,updateQuantity) => {
        product.quantity--;
        updateQuantity(product.quantity);
        console.log( product.quantity--);
        this.showAlert();
        console.log( this.state.showAlert);

        
    };
    showAlert = () => {
        this.setState({ showAlert: true }, () => {
          setTimeout(() => {
            this.setState({ showAlert: false });
          }, 2000);
        });
      };
    componentDidMount() {
        setTimeout(()=>{this.setState({ showWelcome: false })}, 3000);

    };
    render() { 
        return (
    <>
    {/* <Product name="Pc Lenovo" price = "8654387" img="product1.webp" quantity= "15" likes="20" description="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée"/> */}
    {this.state.showWelcome && 
         <Alert key="success" variant="success">
              Welcome to the online shop
        </Alert> 
    }
    {this.state.showAlert && 
        <Alert key="success" variant="success">
             You bought an item
        </Alert>
    }
    <Container style={{marginTop : '2rem'}}>
        <Row>  
            {productsJson.map((product,i) => (
                    <Product key={i} prod = {product} onBuy={this.handleBuy}/>

            ))}
        </Row>
    </Container>
        </>);
    }
}
 
export default Products;