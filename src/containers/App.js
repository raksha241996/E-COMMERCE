import React from 'react';
import '../styles/containerStyles/App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import HomeIcon from '@material-ui/icons/Home'

function Products() {
  return <h2>Products</h2>;
}

function Cart() {
  return <h2>Cart</h2>;
}
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      activeClass: "#active"
    }
  }

  render() {
    return (
      <Router>
        <nav >
          <div className="topnav">
            <a href="#home" tabindex="1" ><Link to="/"><HomeIcon/>Home</Link></a>
            <a href="#produts" tabindex="1"> <Link to="/products/">Products</Link></a>
            <a href="#cart"><Link to="/cart/">Cart</Link></a>
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
