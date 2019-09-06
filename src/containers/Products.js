import React from 'react';
import DisplayProduct from '../components/DisplayProduct';
import Pagination from '../components/Pagination';

import axios from 'axios';
import { connect } from 'react-redux'
import productsAction from '../action/productsAction'
import { bindActionCreators } from 'redux';

class Products extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            disable: false,
            productsArray: [],
            currentPage: 1,
            ProductsPerPage: 5,
        }

        this.cart = [];        

    }

    componentWillMount() {
        this.getDataCall();
        // console.log("inside products page " + this.props.products)

        this.cart = JSON.parse(localStorage.getItem('cart'));
        // this.updateContent();
    }

    getDataCall = () => {
        this.props.fetchProducts().then(() => {

            // console.log("getData" + this.props.products);

            this.setState({ productsArray: this.props.products }, this.updateContent() );
            
        }
        );

    }

    updateContent = () => {
        this.indexOfLastProduct = this.state.currentPage * this.state.ProductsPerPage;
        this.indexOfFirstProduct = this.indexOfLastProduct - this.state.ProductsPerPage;
        this.currentProducts = this.state.productsArray.slice(this.indexOfFirstProduct,this.indexOfLastProduct);
    }


    paginate(num){
        this.setState({currentPage : num}, () => {
            this.updateContent();
        });
        
    }

   
    updateQuantity(product){
        let index = this.cart.findIndex(x => x.id === product.id);
        // console.log(product.id, "index is ", index)
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
        // if (this.props.products)
        //     console.log("inside products page " + JSON.stringify(this.props.products))
        // else
        //     console.log("inside products page stringify" + this.props.products)

        return (
            <section>
            <DisplayProduct products={this.props.products.slice(this.indexOfFirstProduct, this.indexOfLastProduct)} toggleButton={this.toggleButton.bind(this)} />
            <Pagination
                postsPerPage={this.state.ProductsPerPage}
                totalPosts={this.props.products.length}
                paginate={this.paginate.bind(this)} />
            </section>

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