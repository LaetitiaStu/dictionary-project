import logo from "./img/book-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="Book-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Laetitia Stuchtey</footer>
      </div>
    </div>
  );
}

export default App;
