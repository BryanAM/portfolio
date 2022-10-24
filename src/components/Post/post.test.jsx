import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { customRender } from '../../utils/test-utils';
import Post from './Post';

test('renders menu', () => {
  customRender(<BrowserRouter><Post /></BrowserRouter>);
});
