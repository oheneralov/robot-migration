import React from 'react';
import ReactDOM from 'react-dom';
import Simulation2d from './modules/Simulation2d';
import ReactTestUtils from 'react-addons-test-utils';

it('renders Simulation2d without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Simulation2d />, div);
});

it ('checks simulation2d output', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<Simulation2d />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('div');
});
