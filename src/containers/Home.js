import React from 'react';
import welcomeimage from '../assets/welcomeimage.jpg'
import '../styles/containerStyles/HomeStyle.scss'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from "../containers/Products"
export default function Home() {

    

    return (
      
     
    <div className="Home">
        <img src={welcomeimage} alt="welcome" width="100%" >
        </img>
        {/* <button className="btn">Start Shopping</button> */}
        {/* <Button variant="contained" color="primary" className="btn" >
        Start Shopping !!
      </Button> */}
      <Route path="/products/" component={Products} />
    </div>
    
    
        );
  }