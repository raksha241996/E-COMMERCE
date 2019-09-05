import {combineReducers} from 'redux';
import productReducers from './producerReducer'


export default combineReducers({
    products :productReducers
})