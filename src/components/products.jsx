import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { getallProducts } from '../service/api';
import prod from "../products.json";
import Product from './product';
function Products() {
    const [showAlert , setShowAlert]=useState(false);
    const [showGreeting , setShowGreeting]=useState(false);
    const [products , setProducts] = useState([]);
   
    // const [qte , setQte] = useState(0);
    const buy = (produit) => {
        // produit.quantity --;
        // setQte(qte = qte +1);
        // console.log(qte);
        setShowAlert(true);
        setTimeout(()=>{
            setShowAlert(false);
        },2000);
       
    }
    useEffect(() => {
        getallProducts().then(products => setProducts(products));
        setShowGreeting(true);
        setTimeout(()=>{
            setShowGreeting(false);
        },3000);

        // return () => console.log("Unmount");

    },[]);
    return (  
        <>
          { showAlert && 
            <Alert key="success" variant="success" > 
                 You bought a element
            </Alert>
            }
            { showGreeting && 
            <Alert key="success" variant="success" > 
                 Welcome
            </Alert>
            }
        <Container style={{marginTop : '2rem'}}>
                <Row>      
                {
                    products.map((p , index) => (
                        <Col style={{margin : '1rem'}} key={index} lg={3}>
                            <Product  product={p}  onBuy={buy} />
                        </Col>

                    ))
                }
                </Row>  
         </Container>
            
        </>
    );
}
export default Products;