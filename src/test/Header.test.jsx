import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header component', () => {
    it('renders the header and displays the correct title', () => {
        render(<Header />);

        const titleElement = screen.getByText('Starships Listing App');
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveClass('font-rale text-4xl font-semibold tracking-widest');
    });
});
