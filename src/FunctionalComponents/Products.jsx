import React, { useEffect, useState } from 'react';
import productsJson from '../products.json'
import Product from '../FunctionalComponents/Product';
import { Alert, Container, Row } from 'react-bootstrap';

function Products() {
    const [showAlert , setShowAlert] = useState(false);
    const [welcomeAlert , setWelcomeAlert] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setWelcomeAlert(false);
        },3000)
    }
    ,[])
    const handleBuy = (product , setQuantity) => {
        product.quantity--;
        setQuantity(product.quantity);
        console.log(product.quantity);
        showAlertFunc();
    };
    const showAlertFunc=() => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false)
        },2000);
    };
    return (  <>
    {welcomeAlert && 
     <Alert key="success" variant="success">
     Welcome
    </Alert>}
    {showAlert && 
     <Alert key="success" variant="success">
     You bought an item
    </Alert>}
 <Container style={{marginTop : '2rem'}}>
        <Row>  
            {productsJson.map((product,i) => (
                    <Product key={i} prod = {product} onBuy = {handleBuy}/>

            ))}
        </Row>
    </Container>
    </>);
}

export default Products;