import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { customRender } from '../../utils/test-utils';
import LanguageSwitcher from './LanguageSwitcher';

test('renders menu', () => {
  customRender(<BrowserRouter><LanguageSwitcher /></BrowserRouter>);
});
