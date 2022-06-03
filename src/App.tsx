import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import Counter from './app/Counter';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </React.Fragment>
  );
}

export default App;
