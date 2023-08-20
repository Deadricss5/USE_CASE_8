import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { UserForm } from './components/UserForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Provider store={store}>
          <UserForm />
        </Provider>
      </div>
    </div>
  );
}

export default App;
