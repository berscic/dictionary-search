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
        Coded by Bernice Scicluna. Open source code on{" "}
        <a href="https://github.com/berscic/dictionary-search" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
