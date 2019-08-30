import React, { Component } from 'react'
import '../styles/componentStyles/Cart.scss'


export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
        };

    }

    componentDidMount(){
        fetch('https://api.myjson.com/bins/ww7qv')   
        .then(res => res.json())
        .then(result => {this.setLocal(result.items)});
        this.setState({items : this.getLocal()});   
    }

    componentWillUnmount() {
        this.setLocal(this.state.items);
    }

    getLocal = () => JSON.parse(localStorage.getItem('items')) 
    setLocal = (items) => {localStorage.setItem('items',JSON.stringify(items))}


    increaseByOne = (id) => {
        let items = this.state.items;
        let ite = items.findIndex(x =>  x.id === id);
        items[ite].quantity= parseInt(items[ite].quantity)+1;
        this.setState({items : items});
        this.setLocal(this.state.items);
    }
    
    
    decreaseByOne = (id) => {
        let items = this.state.items;
        let ite = items.findIndex(x =>  x.id === id);
        
        if(items[ite].quantity > 1){
            items[ite].quantity= parseInt(items[ite].quantity)-1;  
        }     
        this.setState({items : items});
        this.setLocal(this.state.items);
    }

    removeItem = (id) => {
        let items = this.state.items;
        items = items.filter(x => x.id !== id);
        this.setState({items : items});
        this.setLocal(this.state.items);
        // console.log(`Item with id ${id} Deleted`); 
    }

    CalculatePrice = (props) => {
        let total = 0;
        let items = props.item

        console.log(items.length);


        for(let i=0;i<items.length;i++){
            total += (parseInt(items[i].price)*parseInt(items[i].quantity))
        }

        return (
            <div>
                <h3>Price of {items.length} items</h3>
                <hr />
                <h3>Total Amount : {total}</h3>
            </div>
        )
    }

    CreateListoOfItems = (props) => {
        let itemList = [];

        props.item.forEach((item) => {
            itemList.push(
                    <div id="item" key = {item.id}>
                        <div id="imgndisnbtn">
                            <img src={item.image} alt="item"/>
                            <p>{item.disc}</p>
                            <p>Quantity : {item.quantity}, Price : {item.price}$</p>
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

    
    render() {
        return (
            <div className="CartBody">                
                    <div id="itemListDisplay">
                        <div id="flexContainer">
                            <this.CreateListoOfItems item={this.state.items}/>                                                                                         
                        </div>
                    </div>
                    <div id="priceDetails">
                        <div>Price Detils</div>
                        <this.CalculatePrice item={this.state.items} />                        
                    </div>   
                </div>
        )
    }
}

