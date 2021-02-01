import React, { FC } from 'react';
import { Logo } from 'typography';
import './styles.css';

export const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <p>Edit code and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
