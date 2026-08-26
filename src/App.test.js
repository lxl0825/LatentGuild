// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LatentGuild title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LatentGuild/i);
    expect(titleElement).toBeInTheDocument();
});
