import { createStore } from 'redux'


const reducer = (state, action) => {

    switch (action.type) {

        case "ADD":
            state = state + action.payload;
            break;

        case "SUBMIT":
            break;


    }
    return state;
}

const store = createStore(reducer, 1);

//trigger action
store.subscribe(()=>{console.log('store updated')}); 

store.dispatch({
    type :"ADD",
    payload:10

});