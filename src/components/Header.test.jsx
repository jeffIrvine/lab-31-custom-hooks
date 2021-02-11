import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../state/themeProvider';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders Header', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
