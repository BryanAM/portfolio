import React from 'react';
import { customRender } from '../../utils/test-utils';
import Projects from './Projects';

test('renders landing hero', () => {
  customRender(<Projects />);
});
