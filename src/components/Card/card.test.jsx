import React from 'react';
import { customRender } from '../../utils/test-utils';
import Card from './Card';

test('renders card component', () => {
  customRender(<Card>Rendered</Card>);
});
