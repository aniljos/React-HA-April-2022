import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from './components/Hello';
import Counter from './components/Counter';
import TypedCounter from './components/TypedCounter';
import ListProducts from './components/ListProducts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
      <section>
          {/* <Alert title="Message" message="Hello react"/>
          <Alert title="Notification" message="Its Working"/> */}

          {/* <Counter initCount={5}/>
          <Counter initCount={10}/>
          <TypedCounter initCount={10}/> */}

          <ListProducts/>
      </section>
    </div>
  );
}

export default App;
