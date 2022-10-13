import React from 'react';
import { customRender } from '../../../utils/test-utils';
import LandingFeatured from './LandingFeatured';

test('renders landing hero', () => {
  customRender(<LandingFeatured />);
});
