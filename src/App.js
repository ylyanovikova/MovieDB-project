import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { MainLayout } from './layouts/MainLayout';
import { ActorsPage, GenresPage, HomePage, MoviesPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={"home"} />} />
        <Route path={'home'} element={<HomePage />} />
        <Route path={'movies'} element={<MoviesPage />} />
        <Route path={'genres'} element={<GenresPage />} />
        <Route path={'actors'} element={<ActorsPage />} />
      </Route>
    </Routes>
  )
}

export default App;
