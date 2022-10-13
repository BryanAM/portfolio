import React from 'react';
import { customRender } from '../../utils/test-utils';
import UnderConstruction from './UnderConstruction';

test('renders landing hero', () => {
  customRender(<UnderConstruction />);
});
