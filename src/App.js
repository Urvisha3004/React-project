import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Component/Product';
import Single_product from './Component/Single_product';
import { Route, Routes } from 'react-router';
import Add_cart from './Component/Add_cart';
import Buy_now from './Component/Buy_now';
function App() {
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/sing/:id' element={<Single_product/>} />
        <Route path='/cart' element={<Add_cart/>} />
        <Route path='/Buy' element={<Buy_now/>}/>
      </Routes>
  
    </>
  );
}

export default App;