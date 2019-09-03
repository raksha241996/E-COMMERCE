import React from 'react';
import '../styles/containerStyles/Cart.scss'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import SubIcon from '@material-ui/icons/Maximize'
import Button from '@material-ui/core/Button';
export class Cart extends React.Component {



    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            clicks: 1,
            show: true
        }

        this.cart = []
    }


    componentWillMount() {
        console.log('in cart initially' + this.state.cart)
        var retrievedData = localStorage.getItem("cart");
        if (retrievedData) {
            this.setState({
                cart: this.state.cart.concat(JSON.parse(retrievedData)
                )
            })
        }
        else {
            alert('No item in Cart')
        }
    }

    IncrementItem = () => {

        this.setState({ clicks: this.state.clicks + 1 });
    }

    DecreaseItem = () => {

        if (this.state.clicks > 1) {
            this.setState({ clicks: this.state.clicks - 1 });
        }
        else {
            alert('Minimum quantity is 1, use delete option to remove the item')
        }


    }

    ToggleClick = () => {

        this.setState({ show: !this.state.show });

    }

    deleteItem(cart) {
        var key = cart.id
        var index;
        var cartArray = this.state.cart
        var pos = cartArray.find((prod, i) => {
            if (prod.id == key) {
                index = i
            }
        })

        cartArray.splice(index, 1)
        this.setState({ cart: cartArray })

        localStorage.setItem("cart", this.state.cart)

    }


    render() {
        console.log('inside render' + this.state.cart)
        return (

            <div className="mainCart">
                {this.state.cart.map(cart => (
                    <div className="eachItem">
                        <div className="imageStyle">
                            <img src={cart.img} alt={cart.img} width="200" height="auto" />
                        </div>
                        <div className="numSpinner">
                            <p className="name">
                                <p className="description">Description :</p> <br />{cart.name} <br /><br />{cart.description}</p>
                            <div className="spinner">
                                <Button variant="contained" color="primary"  >
                                    <AddIcon onClick={this.IncrementItem} />
                                </Button>
                                <span className="spanstyle"> {this.state.clicks} </span>
                                <Button variant="contained" color="primary"  >
                                    <SubIcon onClick={this.DecreaseItem} />
                                </Button>

                            </div>
                        </div>

                        <div className="deleteItem">
                            <Button variant="contained" color="secondary" onClick={() => this.deleteItem(cart)} >
                                <DeleteIcon fontSize="large" />
                            </Button>

                        </div>
                    </div>
                )
                )}
            </div>
        );
    }
}