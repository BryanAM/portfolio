import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { customRender } from '../../utils/test-utils';
import Project from './Project';

test('renders menu', () => {
  customRender(<BrowserRouter><Project /></BrowserRouter>);
});
