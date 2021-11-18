import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GMap from './components/GMap';

function App() {
  return (
    <div className="App">
      <Header/>
      <GMap/>
    </div>
  );
}

export default App;
