import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const div = document.createElement('div');

beforeEach(() => {
  ReactDOM.render(<App />, div);
});
afterEach (() => {
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});