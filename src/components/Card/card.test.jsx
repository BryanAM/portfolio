import React from 'react';
import { customRender } from '../../utils/test-utils';
import Card from './Card';

test('renders card', () => {
  customRender(<Card>Rendered</Card>);
});
