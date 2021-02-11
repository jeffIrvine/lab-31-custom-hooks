import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import jsonCharacterList from '../fixtures/characterList.json';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';
import { ThemeProvider } from '../state/themeProvider';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(jsonCharacterList));
  })
);

describe('Main container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches and displays a list of characters', async() => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </ThemeProvider>
    );

    screen.getByText('Loading');

    const charactersList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(charactersList).not.toBeEmptyDOMElement();
    });
  });
});
