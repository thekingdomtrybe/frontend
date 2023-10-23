/**
 * @jest-environment jsdom
*/

import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SiteHeader from './SiteHeader.jsx';

it('renders correctly', () => {
  const component = renderer.create(
    <BrowserRouter>
      <SiteHeader />
    </BrowserRouter>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree = null;
  // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseLeave();
  // });

  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
