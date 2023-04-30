import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../components/Loading'

describe('Header component', () => {
    it('renders the loading and displays slicer and loading... text', () => {
        render(<Loading />);

        const titleElement = screen.getByText('Loading...');
        expect(titleElement).toBeInTheDocument();
    });
});