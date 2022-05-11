//Imports Pages
import Home from '../pages/Home';
import DetailMovie from '../pages/DetailMovie';
import MoviesResults from '../pages/MovieResults';

//Import Page Error
import Error404 from '../pages/Error404/Error404';

export const publicRoutes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/detail/:movieID',
    element: DetailMovie,
  },
  {
    path: '/list-movies/:title',
    element: MoviesResults,
  },
  {
    path: '*',
    element: Error404,
  },
];
