import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Provider store={store}>
          <h1>USE CASE 8</h1>
        </Provider>
      </div>
    </div>
  );
}

export default App;
