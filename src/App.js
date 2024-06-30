import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componet/Header';
import Product from './Componet/Product';
import Single_product from './Componet/Single_product';
import { Route, Routes } from 'react-router';
import Add_cart from './Componet/Add_cart';
import Buy_now from './Componet/Buy_now';
function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/sing/:id' element={<Single_product/>} />
        <Route path='/cart' element={<Add_cart/>} />
        <Route path='/Buy' element={<Buy_now/>}/>
      </Routes>
      {/* <Product/> */}
      {/* <Single_product/> */}
      
    </>
  );
}

export default App;
