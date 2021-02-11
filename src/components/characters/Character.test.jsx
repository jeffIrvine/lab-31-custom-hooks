import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const characterObj = {
      name: 'Rick Sanchez',
      species: 'Human',
      image: 'http'
    };
    const { asFragment } = render(<Character {...characterObj}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
