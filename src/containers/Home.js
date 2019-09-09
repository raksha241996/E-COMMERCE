import React from 'react';
import welcomeimage from '../assets/welcomeimage.jpg'
import '../styles/containerStyles/HomeStyle.scss'
import { Route } from "react-router-dom";
import Products from "../containers/Products"

export default class Home extends  React.Component {
    
render(){
    return (
    <div className="Home">
        <img src={welcomeimage} alt="welcome" width="100%">
        </img>
      <Route path="/products/" component={Products} />
    </div>
        );
    }
  }