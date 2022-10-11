import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app__wrapper">
      <header className="app__header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/235/235361.png"
          alt="logo"/>
      </header>
      <nav className="app__nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className="app__content">
        <div>Footer</div>
      </div>
    </div>
  );
}

export default App;
