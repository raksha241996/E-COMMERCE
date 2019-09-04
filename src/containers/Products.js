import React from 'react';
import '../styles/containerStyles/ProductsStyle.scss'
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import axios from 'axios';

export default class Products extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            disable:false,
            productsArray:[]
        }

    
        this.cart=[]

    }

    componentWillMount() {
        axios.get('https://api.myjson.com/bins/wvekv')
        .then( (response) => {
          this.setState({
          productsArray:response.data
          });
          JSON.stringify(this.state.productsArray);
          localStorage.setItem("products", JSON.stringify(this.state.productsArray));
        })
        .catch( (error) => {
          console.log(error);
        }); 

        this.cart = JSON.parse(localStorage.getItem('cart'));
         

    }

    updateQuantity(product){
        let index = this.cart.findIndex(x => x.id === product.id);
        console.log(product.id, "index is ", index)
        if(index === -1){
            this.cart.push(product);
        }
        else {
            this.cart[index].quantity = parseInt(this.cart[index].quantity)+1;
            }
        localStorage.setItem('count', this.cart.length);
        this.props.handleCount(this.cart.length);
        
    }

    toggleButton( products){
        this.setState({disable : true})
        alert("Item Added");
        this.updateQuantity(products);
        localStorage.setItem("cart", JSON.stringify(this.cart));

    }
    render() {

        var retrievedData = localStorage.getItem("products");
        var products = JSON.parse(retrievedData);
        // console.log('products retreived'+ products)
        return (
            <section className="mainClass">
                {products.map(products => (
                    <article className="indivialProduct">
                        <figure className="imageBox">
                            <img src={products.img} alt={products.img} height='250px' width='200px'  />
                        </figure>
                        <p className="name">{products.name} <br /><br /> Price :${products.Price}</p>
                        <Button variant="contained" color="primary" className="button"  onClick={()=>this.toggleButton(products)} >
                        <AddShoppingCartIcon />
                         Add To Cart !!
                        </Button>
                    </article>
                ))}

            </section>
        );
    }
}