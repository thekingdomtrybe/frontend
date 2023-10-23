/**
 * @jest-environment jsdom
*/

import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SiteLogo from './SiteLogo.jsx';

it('renders correctly', () => {
  const component = renderer.create(
    <BrowserRouter>
      <SiteLogo />
    </BrowserRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
