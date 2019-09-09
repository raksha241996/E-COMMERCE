import React from 'react';
import { shallow ,configure} from 'enzyme';
import {Products} from '../../src/containers/Products'
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//mocking the store for testing
const store = mockStore({
 dispatch: jest.fn(),
        products:{
     }
    
});



//configuring the Adapter for using enzyme
configure({ adapter: new Adapter() });

//creating static props for testing
const createTestProps = props => ({
    products :[{}],
    handleCount:jest.fn(),
    fetchProducts:jest.fn().mockImplementation(()=>{
        return Promise.resolve({});
    })
})


describe('Product component test with Enzyme', () => {
    it('renders without crashing', () => {
        const props = createTestProps({});
       const wrapper =   shallow(  
           <Products store={store} {...props}/>
         );
          const instance = wrapper.instance()
          expect(wrapper).toMatchSnapshot();
     });
 });


 describe('Product component test with Enzyme', () => {
    it('toggleButton calls without crashing', () => {
        const props = createTestProps({});
       const wrapper =   shallow(  
           <Products store={store} {...props}/>
         );
          const instance = wrapper.instance()
          instance.cart=[]
          instance.toggleButton(props.products)
          expect(wrapper).toMatchSnapshot();
     });
 });