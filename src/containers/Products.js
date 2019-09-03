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
                description: "Price : Rs.200/- "
            }
            ,
            {
                id: 2,
                name: "Redux Watch",
                img: watch,
                description: "Price : Rs.2000/- "
            },
            {
                id: 3,
                name: "Dressberry dress",
                img: dress,
                description: "Price : Rs.700/- "
            },
            {
                id: 1,
                name: "Red Skirt",
                img: skirt,
                description: "Price : Rs.700/- "
            }
            ,
            {
                id: 2,
                name: "Canvas shoes",
                img: shoes,
                description: "Price : Rs.1000/- "
            },
            {
                id: 3,
                name: "Pump Heel",
                img: heels,
                description: "Price : Rs.1200/- "
            }

        ]
        
        
        this.cart=[]

    }

    componentWillMount() {
        JSON.stringify(this.productsArray);
        localStorage.setItem("products", JSON.stringify(this.productsArray));
       

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