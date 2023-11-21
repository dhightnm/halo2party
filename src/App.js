import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
        <header className="sourceheader">
        <a href="http://www.halop2party.com/">Your #1 Source For Halo 2 Party Info (link home)</a>
        </header>
        <div className="video-container" alt="halo video">
          <iframe width="813" height="610" src="https://www.youtube.com/embed/0jXTBAGv9ZQ" title="Halo Theme Song Original" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
