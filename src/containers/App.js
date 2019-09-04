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
  constructor(props){
    super(props);

    this.state ={
      count : 0
    };

    this.handleCount = this.handleCount.bind(this);
  }

  componentWillUpdate(){
    parseInt(localStorage.getItem('count')) === 0 ? this.hideCount() : this.showCount();
  }

  componentDidMount(){
    this.setState({count : parseInt(localStorage.getItem('count')) })
  }

  handleCount(count){
    this.setState({count : count}); 
  }

  hideCount(){
    document.querySelector("#count").style.visibility = 'hidden';
  }
  showCount(){
    document.querySelector("#count").style.visibility = 'visible';
  }

  render() {
    return (
      
      <Router>
        <header>
          <nav className="topnav">
            <a href="#home" tabIndex="1" ><Link to="/"><HomeIcon/>Home</Link></a>
            <a href="#produts" tabIndex="1"> <Link to="/products/"><ShopIcon/>Products</Link></a>
            <a href="#cart"><Link to="/cart/"><ShoppingCartIcon/>Cart</Link> <span id="count">{ this.state.count }</span> </a>
          </nav>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/products/"  render={() =>  <Products handleCount = {this.handleCount} /> } />
        <Route path="/cart/" render={() =>  <Cart handleCount = {this.handleCount} />  } />
      </Router>
    
    );
  }
}

export default App;
