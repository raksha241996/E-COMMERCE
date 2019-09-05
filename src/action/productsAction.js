import {FETCH_PRODUCTS} from './types'

//Action to fetch product details 
 const fetchProducts = ()=>{
    console.log('fetching');
    return (dispatch)=>{
       return fetch('https://api.myjson.com/bins/wvekv')
        .then((response) =>{response.json().then((res)=>{
            console.log(res)
            return dispatch({
                type:FETCH_PRODUCTS,
                payload:res
                });
        })     
        }
        )
    }
}

export default{
    fetchProducts
}