import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../features/store';
import MyProfile from '../component/MyProfile';

describe('testing Profile Page components', () => {
  it('testing ProfilePage component', () => {
    const profilePage = renderer.create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(profilePage).toMatchSnapshot();
  });
});
