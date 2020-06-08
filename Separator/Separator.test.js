/* eslint-disable react/react-in-jsx-scope */
/* global shallow */

import Separator from './index';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Separator />);
});

it('renders without crashing', () => {
  expect(wrapper).to.not.equal(null);
});

afterEach(() => {
  if (wrapper) wrapper.unmount();
});
