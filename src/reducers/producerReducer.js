import { FETCH_PRODUCTS } from '../action/types'

const initialState = {
    products: [],
    product: {}

}

export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_PRODUCTS:
            console.log("reducer")
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;


    }
}