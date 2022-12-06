import { render, screen } from '@testing-library/react';
import App from './App';
import '~fundamental-styles/dist/fundamental-styles';
import '~fundamental-styles/dist/fundamental-styles';
import '~@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
