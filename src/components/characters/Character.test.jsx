import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';
import { ThemeProvider } from '../../state/themeProvider';
import { MemoryRouter } from 'react-router-dom';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const characterObj = {
      name: 'Rick Sanchez',
      species: 'Human',
      image: 'http'
    };
    const { asFragment } = render(
      <ThemeProvider>
        <MemoryRouter>
          <Character {...characterObj}/>
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
