import React, { Component } from 'react'
import '../styles/componentStyles/Cart.scss'


// const items = JSON.parse(localStorage.getItem('items'));

export default class Cart extends Component {

    
    render() {
        return (
            <div className="CartBody">                
                    <div id="itemListDisplay">
                        <div id="flexContainer">
                            <div id="item">
                                <div id="imgndisnbtn">
                                    <img src="https://hackernoon.com/hn-images/1*To2H39eauxaeYxYMtV1afQ.png" alt="item"/>
                                    <p>Hello</p>
                                    <button>Remove</button>
                                </div>
                                <div id="btns">
                                    <button id="plus">+</button>
                                    <button id="minus">-</button>
                                </div>    
                            </div>
                            <div id="item">
                                <div id="imgndisnbtn">
                                    <img src="https://hackernoon.com/hn-images/1*To2H39eauxaeYxYMtV1afQ.png" alt="item"/>
                                    <p>DiscriptionDiscriptionDiscripti onDiscriptionDiscriptionDiscription</p>
                                    <button>Remove</button>
                                </div>
                                <div id="btns">
                                    <button id="plus">+</button>
                                    <button id="minus">-</button>
                                </div>    
                            </div>
                                                 
                        </div>
                    </div>
    
                    <div id="priceDetails">
                        <p>Price Details</p>
                    </div>
                    
                    
                </div>
        )
    }
}
