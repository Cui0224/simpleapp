import React from "react";
import IndexRouter from "./router/IndexRouter"
import "./css/index.css"
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <header className="App-container">

        <IndexRouter></IndexRouter>
      </header>

    </div>
  );
}
export default App;
