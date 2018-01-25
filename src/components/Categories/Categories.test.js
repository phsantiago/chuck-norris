import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './Categories.jsx';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Categories />, div);
  ReactDOM.unmountComponentAtNode(div);
});
