/* eslint-disable max-len */
import React from 'react';
// import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { I18nextProvider } from 'react-i18next';
import PropTypes from 'prop-types';
import i18n from '../i18next/index';

function AllProviders({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options) => TestRenderer.create(ui, { wrapper: AllProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender };
