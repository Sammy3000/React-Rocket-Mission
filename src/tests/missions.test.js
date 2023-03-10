import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Missions from '../component/Missions';
import store from '../features/store';

describe('Testing missions component', () => {
  it('Test Missions Component', () => {
    const missionsComponent = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(missionsComponent).toMatchSnapshot();
  });
});
