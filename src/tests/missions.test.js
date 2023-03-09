import Missions from '../component/Missions';
import { Provider } from 'react-redux';
import store from '../features/store';
import { render } from '@testing-library/react';
describe('Testing missions component', () => {
  it('Test Missions Component', () => {
    const missionsComponent = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );
    expect(missionsComponent).toMatchSnapshot();
  });
});
