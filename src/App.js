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
        <h1>The wise fox dictionary</h1>
        <div>
          <Dictionary />
        </div>
        <p className='Footer'>
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
        </p>
      </div>
    </div>
  );
}

export default App;
