import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { customRender } from '../../utils/test-utils';
import Menu from './Menu';

test('renders menu', () => {
  customRender(<BrowserRouter><Menu /></BrowserRouter>);
});
