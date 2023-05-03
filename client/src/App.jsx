import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
