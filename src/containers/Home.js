import React from 'react';
import welcomeimage from '../assets/welcomeimage.jpg'
import '../styles/containerStyles/HomeStyle.scss'
import Button from '@material-ui/core/Button';

export default function Home() {

    

    return (
    <div className="Home">
        <img src={welcomeimage} alt="welcome" width="100%" >
        </img>
        {/* <button className="btn">Start Shopping</button> */}
        <Button variant="contained" color="primary" className="btn" >
        Start Shopping !!
      </Button>
    
    </div>
         
        );
  }