import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Card from '../components/Card';
import '@testing-library/jest-dom';


describe('Card component', () => {
  const starship = {
    name: 'Starship Name',
    model: 'Starship Model',
    url: 'https://swapi.dev/api/starships/9/',
    hyperdrive_rating: '4.0',
  };

  it('should render Card component with required props', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Card index={1} starship={starship} />
      </MemoryRouter>
    );

    expect(getByText(starship.name)).toBeInTheDocument();
    expect(getByText(starship.model)).toBeInTheDocument();
  });

  it('should not have undefined id value', () => {
    const { container } = render(
      <MemoryRouter>
        <Card index={1} starship={starship} />
      </MemoryRouter>
    );
    const url = starship.url;
    const id = parseInt(new URL(url).pathname.split('/').slice(-2, -1)[0]);

    expect(id).not.toBeUndefined();
  });


  it('should render a div with "Click for details" text if isHovered is true', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <Card index={1} starship={starship} />
      </MemoryRouter>
    );
    const card = container.firstChild;

    fireEvent.mouseEnter(card);

    expect(getByText('Click for details')).toBeInTheDocument();
  });
});
