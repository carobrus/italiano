import React from 'react';
import logo from './logo.svg';
import './App.css';
import RoutesComponent from './routes/routes';

function App() {
  return (
    <div className="text-black flex flex-col w-full">
      {/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header> */}
      <RoutesComponent />
    </div>
  );
}

export default App;
