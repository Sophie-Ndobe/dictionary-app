import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h4 className="text-center mb-3 pt-3">📖📖English Dictionary📖📖</h4>
        </header>
        <main>
          <Dictionary defaultkeyword="bright" />
        </main>
        <footer className="App-footer">
          <small>
            This project was developed by{" "}
            <a
              href="https://github.com/Sophie-Ndobe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>SN Ndobe</strong>
            </a>
            , released as{" "}
            <a
              href="https://github.com/Sophie-Ndobe/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open source
            </a>
            , and is hosted on{" "}
            <a
              href="https://dictionary-sophie-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
