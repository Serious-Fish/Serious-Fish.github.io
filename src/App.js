import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Joshua Discar's Portfolio!
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyButton />
        </p>
      </header>
    </div>
  );
}

export default App;
