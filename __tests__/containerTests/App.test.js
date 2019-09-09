import React from 'react';
import { shallow ,configure} from 'enzyme';
import App from '../../src/containers/App'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component test with Enzyme', () => {
   it('renders without crashing', () => {
      const wrapper =   shallow(<App />);
         const instance = wrapper.instance()
         instance.hideCount()
         expect(wrapper).toMatchSnapshot();
    });
});


