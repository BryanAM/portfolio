import React from 'react';
import { customRender } from '../../../utils/test-utils';
import LandingIntro from './LandingIntro';

test('renders landing hero', () => {
  customRender(<LandingIntro />);
});
