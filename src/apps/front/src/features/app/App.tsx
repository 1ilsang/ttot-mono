import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Router';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
