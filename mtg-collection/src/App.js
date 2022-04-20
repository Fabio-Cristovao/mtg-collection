
import './App.css';
import Dashboard from './components/Dashboard';
import React, { useState, useEffect } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {



  return (
    <div className="App">

      <Provider store={store}>
        <Dashboard />
      </Provider >
    </div>
  );
}

export default App;
