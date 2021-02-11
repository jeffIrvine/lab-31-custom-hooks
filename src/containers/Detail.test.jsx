/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import singleJsonCharacter from '../fixtures/singleCharacter.json';
import Detail from './Detail';
import { ThemeProvider } from '../state/themeProvider';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
    return res(ctx.json(singleJsonCharacter));
  })
);

describe('Detail container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('fetches and displays a single character', async() => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <Detail match={{ params: { id: '1' } }}/>
        </MemoryRouter>
      </ThemeProvider>
    );

    screen.getByText('Loading');

    return waitFor(() => {
      screen.getByText('Rick Sanchez');
      screen.getByText('Human');
      screen.getByAltText('Rick Sanchez');
    });
  });
});
