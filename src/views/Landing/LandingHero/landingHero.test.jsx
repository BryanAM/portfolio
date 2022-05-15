import React from 'react';
import { customRender } from '../../../utils/test-utils';
import LandingHero from './LandingHero';

test('renders landing hero', () => {
  customRender(<LandingHero />);
});
