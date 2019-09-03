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
        axios.get('https://api.myjson.com/bins/110rw7')
        .then( (response) => {
          console.log("response", response.data);
          this.setState({
          productsArray:response.data
          });
          JSON.stringify(this.state.productsArray);
          localStorage.setItem("products", JSON.stringify(this.state.productsArray));
          console.log("fetchUser", this.state.productsArray
          );
        })
        .catch( (error) => {
          console.log(error);
        }); 
         

    }

    toggleButton( products){
        console.log(products)
        alert('Product added to Cart')
        this.setState({disable : true})
        this.cart.push(products)
        localStorage.setItem("cart", JSON.stringify(this.cart));

    }
    render() {

        var retrievedData = localStorage.getItem("products");
        var products = JSON.parse(retrievedData);
        console.log('products retreived'+ products)
        return (
            <div className="mainClass">
                {products.map(products => (
                    <div className="indivialProduct">
                        <div className="imageBox">
                            <img src={products.img} alt={products.img}  />
                        </div>
                        <p className="name">{products.name} <br /><br />{products.description}</p>
                        <Button variant="contained" color="primary" className="btn"  onClick={()=>this.toggleButton(products)} >
                        <AddShoppingCartIcon />
                         Add To Cart !!
                        </Button>
                    </div>
                ))}

            </div>
        );
    }
}