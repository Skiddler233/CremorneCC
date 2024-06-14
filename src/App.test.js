import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Components/Header/Header';

//Testing the Header Image and Logo are rendering Correctly
test('Renders logo and header image', () => {
  const { getByAltText } = render(<Header />);

  const logoImage = getByAltText('Logo');
  const headerImage = getByAltText('Header');

  expect(logoImage).toBeInTheDocument();
  expect(headerImage).toBeInTheDocument();
});

//Testing that Clicking on the Navigation Icon will show the dropdown for the Nav
test('Clicking menu icon toggles Menu', () =>{
  const { getByAltText, getByTestId } = render(<Header />);
  const MenuIcon = getByAltText('Menu Icon');

  fireEvent.click(MenuIcon);

  const menuDropdown = getByTestId('menu-dropdown');

  expect(menuDropdown).toHaveClass('show');
});


