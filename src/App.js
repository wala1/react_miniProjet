import './App.css';
import React from 'react';
import Products from './ClassComponents/Products';
;


function App() {
  // const Products = React.lazy(()=> import('./components/products'));
  // const Users = React.lazy(()=> import('./components/users'));
  // const NotFound = React.lazy(()=> import('./components/NotFound'));
  // const AddProduct = React.lazy(()=> import('./components/AddProduct'));

  return (
    <>
     {/*<NavBar></NavBar>
    <Routes>
        <Route path="/products"   >
            <Route index element={<Products />}/>
            <Route path=':name' element={<ProductDetail />}/>
            <Route path="/add" element={<AddProduct/>}/>
            <Route path=':id' element={<ProductDetail />} />
        </Route>
        <Route path="/products/add" element={<AddProduct />}></Route>
        <Route path="/products/update/:id" element={<UpdateProduct />}></Route>

        <Route path="/users" element={<Users />}></Route>
        <Route path="*" element={<NotFound />}></Route>
  </Routes>*/}
  <Products/>
    
        
    
  
    
    </>
   
  );
}

export default App;
