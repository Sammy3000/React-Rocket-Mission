import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../features/store';

describe('testing snapshots of Rocket component', () => {
  it('testing myProfile component', () => {
    const profileComponent = render(
      <Provider store={store}>
        <myProfile />
      </Provider>
    );
    expect(profileComponent).toMatchSnapshot();
  });
});
