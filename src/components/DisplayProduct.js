import React from 'react';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../styles/containerStyles/ProductsStyle.scss';


const DisplayProduct = ({products, toggleButton}) => {
    return (
        <section className="mainClass">
            {products.map(product => (
                    <article className="indivialProduct">
                        <figure className="imageBox">
                            <img src={product.img} alt={product.img} height='250px' width='200px'  />
                        </figure>
                        <p className="name">{product.name} <br /><br /> Price :${product.Price}</p>
                        <Button variant="contained" color="primary" className="button"  onClick={()=>toggleButton(product)} >
                        <AddShoppingCartIcon />
                         Add To Cart !!
                        </Button>
                    </article>
                ))}
        </section>
    )
}

export default DisplayProduct
