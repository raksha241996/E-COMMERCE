import React from 'react';
import '../styles/containerStyles/App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home'
import Products from './Products'
import HomeIcon from '@material-ui/icons/Home'
import ShopIcon from '@material-ui/icons/Shop'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Cart from './Cart';

class App extends React.Component {

  render() {
    return (
      
      <Router>
        <nav >
          <div className="topnav">
            <a href="#home" tabIndex="1" ><Link to="/"><HomeIcon/>Home</Link></a>
            <a href="#produts" tabIndex="1"> <Link to="/products/"><ShopIcon/>Products</Link></a>
            <a href="#cart"><Link to="/cart/"><ShoppingCartIcon/>Cart</Link></a>
          </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/products/" component={Products} />
        <Route path="/cart/" component={Cart} />
      </Router>
    
    );
  }
}

export default App;
