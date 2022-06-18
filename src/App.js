import fox from './fox.png';
import './App.css';
import Dictionary from './Dictionary.js';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">
          <img src={fox} className="App-logo"
            alt="fox" />
        </header>
        <div>
          <Dictionary />
        </div>
        <small>
          Open-source code available on{" "}
          <a
            href="https://github.com/alineborak/weather-react"
            target="blank"
            rel="noopener noreferrer"
          >
            Github{" "}
          </a>
          by <a
            href="https://www.linkedin.com/in/aline-bora-kloppert/"
            target="blank"
            rel="noopener noreferrer"
          >
            Aline Bora-Kloppert
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
