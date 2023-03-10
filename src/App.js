import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Missions from './component/Missions';
import MyProfile from './component/MyProfile';
import Header from './component/Header';
import NotFound from './component/NotFound';
import Rockets from './component/Rockets';
import { fetchRockets } from './features/rockets/rocketsSlice';
import { getMission } from './features/missions/missionSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(getMission());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MyProfile />}
        />
        <Route
          path="/missions"
          element={<Missions />}
        />
        <Route
          path="/rockets"
          element={<Rockets />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
