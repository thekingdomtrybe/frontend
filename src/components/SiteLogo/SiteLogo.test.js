import renderer from 'react-test-renderer';
import SiteLogo from './SiteLogo.jsx';

it('renders correctly', () => {
  const component = renderer.create(<SiteLogo />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
