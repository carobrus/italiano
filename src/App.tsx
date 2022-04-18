import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesComponent from './routes/routes';

function App() {
  return (
    <div className="text-black flex flex-col w-full bg-neutral-100 min-h-screen">
      <RoutesComponent />
    </div>
  );
}

export default App;
