import React from 'react';
import Logo from './logo.svg';
import './App.css';

function Main() {     
    return (
        <div className="App">
          <header className="App-header">
            <img src={Logo} className="App-logo" alt="Logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="./login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
}

export default Main;