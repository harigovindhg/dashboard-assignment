import React from 'react';
import { Provider } from 'react-redux';
import './styles/App.scss';
import Body from './components/Body';
import appStore from './utils/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};

export default App;
