import React from 'react';
import DisplayProduct from '../components/DisplayProduct';
import Pagination from '../components/Pagination';
import { connect } from 'react-redux'
import productsAction from '../action/productsAction'
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.5/node_modules/redux';

export class Products extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            disable: false,
            productsArray: [],
            currentPage: 1,
            ProductsPerPage: 3,
            currentProducts: 0
        }

        this.cart = []
        const indexOfLastProduct = 3;
        const indexOfFirstProduct = 2;


    }

    componentDidMount() {
        this.getDataCall();
        console.log("inside products page " + this.props.products)
        this.cart = JSON.parse(localStorage.getItem('cart'));
        
    }

    getDataCall = () => {
        //making API call here
        this.props.fetchProducts().then(() => {

            console.log("getData" + this.props.products);

            this.setState({

                productsArray: this.props.products,
            })
            this.updateContent();
        }
        );

    }

    updateContent = () => {
        this.indexOfLastProduct = this.state.currentPage * this.state.ProductsPerPage;
        this.indexOfFirstProduct = this.indexOfLastProduct - this.state.ProductsPerPage;
    }


    paginate(num,e) {

       
        this.setState({ currentPage: num }, () => {
            this.updateContent();
        });

    }


    updateQuantity(product) {
        let index = this.cart.findIndex(x => x.id === product.id);
        console.log(product.id, "index is ", index)
        if (index === -1) {
            this.cart.push(product);
        }
        else {
            this.cart[index].quantity = parseInt(this.cart[index].quantity) + 1;
        }
        localStorage.setItem('count', this.cart.length);
        this.props.handleCount(this.cart.length);

    }

    toggleButton(products) {
        this.setState({ disable: true })
        alert("Item Added");
        this.updateQuantity(products);
        localStorage.setItem("cart", JSON.stringify(this.cart));

    }


    render (){

        return (
            <section>
                <Pagination
                    postsPerPage={this.state.ProductsPerPage}
                    totalPosts={this.props.products.length}
                    paginate={this.paginate.bind(this)} />
                <DisplayProduct products={this.props.products.slice(this.indexOfFirstProduct, this.indexOfLastProduct)} toggleButton={this.toggleButton.bind(this)} />

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

