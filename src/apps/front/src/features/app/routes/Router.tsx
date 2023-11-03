import { createBrowserRouter } from 'react-router-dom';
import Home from '../../home/Home';
import ErrorPage from '../../error/ErrorPage';
import Board from '../../board/Board';
import rootLoader from './helpers/rootLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'board',
        element: <Board />,
      },
    ],
  },
]);

export default router;
