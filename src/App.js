import logo from "./img/book-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Book-logo img-fluid" alt="logo" />
        <h1>Dictionary</h1>
      </header>
    </div>
  );
}

export default App;
