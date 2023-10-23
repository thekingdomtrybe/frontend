import renderer from 'react-test-renderer';
import SiteHeader from './SiteHeader.jsx';

it('renders correctly', () => {
  const component = renderer.create(<SiteHeader />);
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
