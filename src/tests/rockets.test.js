import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../component/Rockets';
import store from '../features/store';

describe('testing snapshots of Rocket component', () => {
  it('testing Rockets component', () => {
    const rocketComponent = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rocketComponent).toMatchSnapshot();
  });
});
