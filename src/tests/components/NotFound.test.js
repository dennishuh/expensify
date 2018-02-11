import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

test('should Not found page', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});
