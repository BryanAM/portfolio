import React from 'react';
import { customRender } from '../../utils/test-utils';
import Landing from './Landing';

test('renders landing hero', () => {
  customRender(<Landing />);
});
