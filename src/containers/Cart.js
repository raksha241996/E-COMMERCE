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
        this.setState({items : this.getLocal(), count : this.getCount()});   
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
        this.setLocal(items);
        localStorage.setItem('count', items.length); 
        this.props.handleCount(items.length);
        this.setState({items : this.getLocal()});
        
    }

    CalculatePrice = (props) => {
        let total = 0;
        let items = props.item

        for(let i=0;i<items.length;i++){
            total += (parseInt(items[i].Price)*parseInt(items[i].quantity))
        }

        return (
            <article id="calculations">
                <p id="countItem">Total {items.length} items</p>
                <hr />
                <p id="totalPrice">Total Amount : ${total}</p>
            </article>
        )
    }

    CreateListoOfItems = (props) => {
        let itemList = [];            
        
        props.item.forEach((item) => {
            itemList.push(
                    <article id="item" key = {item.id}>
                        <article id="imgndisnbtn">
                            <img src={item.img} alt="item"/>
                                <p>{item.description}</p>
                                <p>Quantity : {item.quantity} <br />Price : $  {item.Price}</p>                          
                            <button onClick ={() => {this.removeItem(item.id)}}>Remove</button>
                        </article>
                        <article id="btns">
                            <button id="plus" onClick = {() => {this.increaseByOne(item.id)}}>+</button>
                            <button id="minus" onClick ={() => {this.decreaseByOne(item.id)}}>-</button>
                        </article>    
                    </article>    
            )
        });

        return itemList;
    }

  

    
    render() {
        return (
            <section className="CartBody">                
                    <section id="itemListDisplay">
                        <section id="flexContainer">
                            <this.CreateListoOfItems item={this.state.items}/>                                                                                         
                        </section>
                    </section>
                    {this.state.items.length ?
                        <aside id="priceDetails">
                            <article id="priceHead">Price Details </article>
                            <this.CalculatePrice item={this.state.items} />                        
                        </aside> 
                           :
                        <p id="noItems">No Items In Cart !!</p> }
                </section>
        )
    }
}

