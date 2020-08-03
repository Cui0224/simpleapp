import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import IndexRouter from "./router/IndexRouter";
import "./AppCss.css"
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-container">
        <Router>
          <IndexRouter></IndexRouter>
        </Router>
      </div>

    </div>
  );
}
export default App;
