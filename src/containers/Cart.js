import React, { Component } from 'react';
import '../styles/containerStyles/Cart.scss';


export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
            };

    }

    componentDidMount(){
        // fetch('https://api.myjson.com/bins/ww7qv')   
        // .then(res => res.json())
        // .then(result => {this.setLocal(result.items)});
        // this.getLocal('cart');
        this.setState({items : this.getLocal(), count : this.getCount()});   
        // this.setCount(this.state.items.length);
    }

    componentWillUnmount() {
        this.setLocal(this.state.items);
    }

    getLocal = () => JSON.parse(localStorage.getItem('cart')) 
    setLocal = (items) => {localStorage.setItem('cart',JSON.stringify(items));}
    getCount = () => parseInt(localStorage.getItem('count'))

    increaseByOne = (id) => {
        let items = this.state.items;
        let ite = items.findIndex(x =>  x.id === id);
        items[ite].quantity= parseInt(items[ite].quantity)+1;
        this.setState({items : items, count : this.getCount()});
        this.setLocal(this.state.items);
    }
    
    
    decreaseByOne = (id) => {
        let items = this.state.items;
        let ite = items.findIndex(x =>  x.id === id);
        
        if(items[ite].quantity > 1){
            items[ite].quantity= parseInt(items[ite].quantity)-1;  
        }
        else {
            alert("Click Remove to delete the item")
        }     
        this.setState({items : items, count : items.length});
        this.setLocal(this.state.items);
    }

    removeItem = (id) => {
        let items = this.state.items;
        items = items.filter(x => x.id !== id);
        console.log(items);
        this.setLocal(items);
        localStorage.setItem('count', items.length); 
        this.props.handleCount(items.length);
        this.setState({items : this.getLocal()});
        
        // console.log(`Item with id ${id} Deleted`); 
    }

    CalculatePrice = (props) => {
        let total = 0;
        let items = props.item

        console.log(items.length);


        for(let i=0;i<items.length;i++){
            total += (parseInt(items[i].Price)*parseInt(items[i].quantity))
        }

        return (
            <div>
                <p id="countItem">Total {items.length} items</p>
                <hr />
                <p id="totalPrice">Total Amount : ${total}</p>
            </div>
        )
    }

    CreateListoOfItems = (props) => {
        let itemList = [];            
        
        props.item.forEach((item) => {
            itemList.push(
                    <div id="item" key = {item.id}>
                        <div id="imgndisnbtn">
                            <img src={item.img} alt="item"/>
                                <p>{item.description}</p>
                                <p>Quantity : {item.quantity} <br />Price : $  {item.Price}</p>                          
                            <button onClick ={() => {this.removeItem(item.id)}}>Remove</button>
                        </div>
                        <div id="btns">
                            <button id="plus" onClick = {() => {this.increaseByOne(item.id)}}>+</button>
                            <button id="minus" onClick ={() => {this.decreaseByOne(item.id)}}>-</button>
                        </div>    
                    </div>    
            )
        });

        return itemList;
    }

    // }

    
    render() {
        return (
            <div className="CartBody">                
                    <div id="itemListDisplay">
                        <div id="flexContainer">
                            <this.CreateListoOfItems item={this.state.items}/>                                                                                         
                        </div>
                    </div>
                    <div id="priceDetails">
                        <div id="priceHead">Price Details</div>
                        <div id="calculations" >
                           <this.CalculatePrice item={this.state.items} />  
                        </div>
                                               
                    </div>   
                </div>
        )
    }
}

