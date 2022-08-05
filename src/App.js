import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { MovieInfo, MoviesByGenre, SearchList } from './components';
import { MainLayout } from './layouts/MainLayout';
import { ActorsPage, GenresPage, HomePage, MoviesPage } from './pages';

function App() {
  return (
    <div id="mainLayout">
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Navigate to={"home"} />} />
          <Route path={'home'} element={<HomePage />} >
            <Route path='searchList' element={<SearchList />} />
          </Route>
          <Route path={'movies'} element={<MoviesPage />} />
          <Route path={'genres'} element={<GenresPage />} >
            <Route path=':id' element={<MoviesByGenre />} />
          </Route>
          <Route path={'actors'} element={<ActorsPage />} />
          <Route path={'movie-info/:id'} element={<MovieInfo />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
