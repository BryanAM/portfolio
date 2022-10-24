import React from 'react';
import { customRender } from '../../utils/test-utils';
import Posts from './Posts';

test('renders landing hero', () => {
  customRender(<Posts />);
});
