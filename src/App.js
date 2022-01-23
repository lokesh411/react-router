import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutingFramework from './routes';
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <RoutingFramework />
    </BrowserRouter>
  );
}

export default App;
