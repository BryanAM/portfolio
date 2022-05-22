import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { customRender } from '../../../utils/test-utils';
import Menu from './MenuMobile';

test('renders menu', () => {
  customRender(<BrowserRouter><MenuMobile /></BrowserRouter>);
});
