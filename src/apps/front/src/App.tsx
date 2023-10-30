import { useLayoutEffect } from 'react';
import './App.css';

const App = () => {
  useLayoutEffect(() => {
    const apiCall = () => {
      fetch('http://127.0.0.1:3000');
    };

    apiCall();
  }, []);

  return <div>Hi</div>;
};

export default App;
