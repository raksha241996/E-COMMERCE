import React from 'react';
import shirt from '../assets/shirt.jpg'
import '../styles/containerStyles/ProductsStyle.scss'
import watch from '../assets/watch.jpg';
import Button from '@material-ui/core/Button';
import dress from '../assets/dress.jpg';
import skirt from '../assets/skirt.jpg';
import shoes from '../assets/shoes.jpg';
import heels from '../assets/heels.jpg';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

export default class Products extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            disable:false
        }

         this.productsArray =[

            {
                id: 1,
                name: "Denim Shirt",
                img: shirt,
                description: "Nice Denim Shirt",
                Price : 200, 
                quantity : 1,
            }
            ,
            {
                id: 2,
                name: "Redux Watch",
                img: watch,
                description: "Price : Rs.2000/- ",
                Price : 2000, 
                quantity : 1
            },
            {
                id: 3,
                name: "Dressberry dress",
                img: dress,
                description: "Price : Rs.700/- ",
                Price : 700, 
                quantity : 1
            },
            {
                id: 1,
                name: "Red Skirt",
                img: skirt,
                description: "Price : Rs.700/- ",
                Price : 700, 
                quantity : 1
            }
            ,
            {
                id: 2,
                name: "Canvas shoes",
                img: shoes,
                description: "Canvas shoes",
                Price : 1000, 
                quantity : 1
            },
            {
                id: 3,
                name: "Pump Heel",
                img: heels,
                description: "Pump Heel",
                Price : 1200, 
                quantity : 1
            }

        ]
        
        
        this.cart = []

    }

    componentWillMount() {
        JSON.stringify(this.productsArray);
        localStorage.setItem("products", JSON.stringify(this.productsArray));
        this.cart = JSON.parse(localStorage.getItem('cart'));
       

    }

    updateQuantity(product){
        let index = this.cart.findIndex(x => x.id === product.id);
        if(index == -1){
            this.cart.push(product);
        }
        else {
            this.cart[index].quantity = parseInt(this.cart[index].quantity)+1;            
        }
        
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