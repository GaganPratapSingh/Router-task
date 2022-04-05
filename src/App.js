
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import {NoMatch} from './Components/NoMatch';
import { Products } from './Components/Product';


function App() {
  return (
   <> 
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='about' element={<About/>}></Route>
     <Route path='Order-summary' element={<OrderSummary/>} ></Route>
     <Route path='products' element={<Products/>}></Route>
     
     </Routes>
   </>
  );
}
export default App;
