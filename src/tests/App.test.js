import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Test Table Component', () => {
  it('Test if there is a Title named STAR WARS PLANET FINDER', () => {
    render(<App />);
    const title = screen.getByRole('heading', {  name: /star wars planet finder/i});
    expect(title).toBeInTheDocument();
  });
  it('Test all labels, inputs and buttons', () => {
    render(<App />);

    const planetFinder = screen.getByText(/what planet are you looking for\?/i);
    const textbox = screen.getByRole('textbox', {  name: /what planet are you looking for\?/i});
    userEvent.type(textbox, "a");

    const filterByCollumn = screen.getByText(/filter by collum:/i);
    const filterSelectColumn = screen.getByRole('combobox', {  name: /filter by collum:/i});
    userEvent.selectOptions(filterSelectColumn, 'diameter');

    const filterComparasion = screen.getByText(/greater than \/ less than \/ equal to/i);
    const filterSelectComparasion = screen.getByRole('combobox', {  name: /greater than \/ less than \/ equal to/i});
    userEvent.selectOptions(filterSelectComparasion, 'menor que');

    const number = screen.getByRole('spinbutton');
    userEvent.type(number, '118001');

    
    const filterBtn = screen.getByRole('button', {  name: /filter/i});
    userEvent.click(filterBtn);

    const removeFilter = screen.getByRole('button', {  name: /x/i});
    userEvent.click(removeFilter);
    
    const clearAllBtn = screen.getByRole('button', {  name: /clear all/i})
    userEvent.click(clearAllBtn);
    
    expect(planetFinder
      && textbox
      && filterByCollumn
      && filterSelectColumn
      && filterComparasion
      && filterSelectComparasion
      && number
      && filterBtn
      && clearAllBtn).toBeInTheDocument();
      // screen.debug();
  });
});
