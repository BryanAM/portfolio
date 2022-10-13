import React from 'react';
import { customRender } from '../../utils/test-utils';
import Resume from './Resume';

test('renders landing hero', () => {
  customRender(<Resume />);
});
