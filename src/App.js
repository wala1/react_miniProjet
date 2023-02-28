import './App.css';
import Products from './components/products';
import { Route , Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Users from './components/users';
import NavBar from './components/NavBar';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
        <Route path="/products"   >
          <Route index element={<Products />}/>
          <Route path=':name' element={<ProductDetail />}/>
        </Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
    
        
    
    {/* <Products /> */}
    </>
   
  );
}

export default App;
