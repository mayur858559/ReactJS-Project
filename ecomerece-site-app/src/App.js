import React from 'react';
import {Switch,Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Product from './component/Product';
import Details from './component/Details';
import Cart from './component/Cart';
import Defalut from './component/Defalut';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          {/* <Route component={Defalut}/> */}
        </switch>
    </div>
  ); 
}

export default App;
