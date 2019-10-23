import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ItemDescription from '../client/src/components/itemDescription.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('checking value of toggle', () => {
  test('it tests that the initial value of toggle is true', () => {
    const wrapper = Enzyme.mount(<ItemDescription description="hello" />);
    expect(wrapper.find('.description').text()).toBe('hello');
  });
});
