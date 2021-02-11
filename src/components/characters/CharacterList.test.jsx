import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { ThemeProvider } from '../../state/themeProvider';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <ThemeProvider>
        <MemoryRouter>
          <CharacterList characters={[]}/>
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
