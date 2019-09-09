import React from 'react';
import { shallow ,configure} from 'enzyme';
import Home from '../../src/containers/Home'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component test with Enzyme', () => {
   it('renders without crashing', () => {
      const wrapper =   shallow(<Home />);
         const instance = wrapper.instance()
         expect(wrapper).toMatchSnapshot();
    });
});


