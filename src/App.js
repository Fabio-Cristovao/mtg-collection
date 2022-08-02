
import './App.css';
import Dashboard from './components/Dashboard';
import React, { useState, useEffect } from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import Popup from './components/Popup';

function App() {



  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
