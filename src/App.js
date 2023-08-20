import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store';
import { UserForm } from './components/UserForm';
import { Container } from './App.styles';

function App() {
  return (
    <div className="App">
      <Container>
        <Provider store={store}>
          <UserForm />
        </Provider>
      </Container>
    </div>
  );
}

export default App;
