import logo from "./img/book-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="Book-logo img-fluid" alt="logo" />
        </header>

        <main>
          <h1>Dictionary</h1>

          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer">
          Coded by Laetitia Stuchtey, open source on{" "}
          <a
            href="https://github.com/LaetitiaStu/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
