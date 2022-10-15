import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <Dictionary />
      <footer>
        Coded by Bernice Scicluna - Open source code available on{" "}
        <a
          href="https://github.com/berscic/dictionary-search"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        - Hosted on{" "}
        <a
          href="https://inspiring-kringle-c2e950.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
