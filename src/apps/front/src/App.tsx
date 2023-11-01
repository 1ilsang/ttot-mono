import { useLayoutEffect } from 'react';
import './App.css';
import { PORT } from 'models';

const App = () => {
  useLayoutEffect(() => {
    const apiCall = () => {
      fetch(`http://127.0.0.1:${PORT}`, {});
    };

    apiCall();
  }, []);

  return <div>Hi</div>;
};

export default App;
