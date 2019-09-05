import React from 'react';
import DisplayProduct from '../components/DisplayProduct';
import Pagination from '../components/Pagination';

import axios from 'axios';

export default class Products extends React.Component {

    constructor(props) {
        super(props)

        this.state= {
            disable:false,
            productsArray: JSON.parse(localStorage.getItem("products")),
            currentPage : 1,
            ProductsPerPage : 5,
        }

    
        this.cart=[]
        const indexOfLastProduct = 0;
        const indexOfFirstProduct = 0;
        const currentProducts = 0;

    }

    componentWillMount() {
        // axios.get('https://api.myjson.com/bins/wvekv')
        // .then( (response) => {
        //   this.setState({
        //   productsArray:response.data
        //   });
        //   JSON.stringify(this.state.productsArray);
        //   localStorage.setItem("products", JSON.stringify(this.state.productsArray));
        // })
        // .catch( (error) => {
        //   console.log(error);
        // }); 

        // this.setState({productsArray : });

        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.updateContent();

    }

    updateContent =()=>{
        this.indexOfLastProduct = this.state.currentPage * this.state.ProductsPerPage;
        this.indexOfFirstProduct = this.indexOfLastProduct - this.state.ProductsPerPage;
        this.currentProducts = this.state.productsArray.slice(this.indexOfFirstProduct,this.indexOfLastProduct);      
    }

    paginate(num, e){
        // e.preventDefault();
        this.setState({currentPage : num}, () => {
        });
        
    }

    componentDidUpdate(){
        this.updateContent();
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
        return (
            <section>
                <DisplayProduct products={this.currentProducts} toggleButton={this.toggleButton.bind(this)} />
                <Pagination 
                    postsPerPage={this.state.ProductsPerPage}
                    totalPosts={this.state.productsArray.length}
                    paginate={this.paginate.bind(this)} />
                </section>
        );
    }
}