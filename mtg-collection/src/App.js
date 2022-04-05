
import './App.css';
import Dashboard from './components/Dashboard';
import React, {useState, useEffect } from 'react';

function App() {

  let [getData, setGetData] = useState(null);

  useEffect(() => {
    fetch('https://api.magicthegathering.io/v1/cards')
    .then(response => response.json())
    .then(data => setGetData(data.message))
  }, [])
  
  return (
    <div className="App">
      <>
        <Dashboard  />
      </>
    </div>
  );
}

export default App;
