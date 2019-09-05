import React from 'react';
import '../styles/containerStyles/ProductsStyle.scss'
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import axios from 'axios';
import { connect } from 'react-redux'
import productsAction from '../action/productsAction'
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.5/node_modules/redux';

class Products extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            disable: false,
            productsArray: []
        }


        this.cart = []

    }

    componentWillMount() {

        //calling action here
        this.props.fetchProducts();
        this.cart = JSON.parse(localStorage.getItem('cart'));

    }

    updateQuantity(product) {
        let index = this.cart.findIndex(x => x.id === product.id);
        if (index == -1) {
            this.cart.push(product);
        }
        else {
            this.cart[index].quantity = parseInt(this.cart[index].quantity) + 1;
        }

    }

    toggleButton(products) {
        var newTotal = 0
        var total = localStorage.getItem('total')
        newTotal = JSON.parse(total) + 1
        this.setState({ disable: true })
        alert("Item Added");
        this.updateQuantity(products);
        localStorage.setItem("cart", JSON.stringify(this.cart));
        localStorage.setItem("total", JSON.stringify(newTotal))
        console.log('newTotal' + newTotal)

    }
    render() {

        // var retrievedData = localStorage.getItem("products");
        // var products = JSON.parse(retrievedData);
        console.log('products 1' + this.props.products)

        return (
            <div className="mainClass">

                {this.props.products.map(products => (
                    <div className="indivialProduct">
                        <div className="imageBox">
                            <img src={products.img} alt={products.img}  />
                        </div>
                        <p className="name">{products.name} <br /><br /> Price :${products.email}</p>
                        <Button variant="contained" color="primary" className="button"  onClick={()=>this.toggleButton(products)} >
                        <AddShoppingCartIcon />
                         Add To Cart !!
                        </Button>
                    </div>
                ))}
                {/* dummy code */}
                {/* {this.props.products.map(products => (
                    <div className="indivialProduct">
                        <div className="imageBox">
                        </div>
                        <p className="name">{products.employee_name} <br /><br /> Price :${products.id}</p>
                        <Button variant="contained" color="primary" className="button"  onClick={()=>this.toggleButton(products)} >
                        <AddShoppingCartIcon />
                         Add To Cart !!
                        </Button>
                    </div>
                ))} */}
            </div>
        );
    }
}


// mapDispatchToProps is used for dispatching actions to the store 
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(productsAction, dispatch)
}


//to get the value from store and assign it to props
const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)