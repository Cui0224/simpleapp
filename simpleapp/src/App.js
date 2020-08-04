<<<<<<< HEAD
import React from "react";
<<<<<<< HEAD
import IndexRouter from "./router/IndexRouter";

import "./AppCss.css";
=======
import React from 'react'
import IndexRouter from './router/IndexRouter'
import Index from './router/index'
import './AppCss.css'
>>>>>>> wyy1
=======
import { BrowserRouter as Router } from "react-router-dom";
import IndexRouter from "./router/IndexRouter";
import "./AppCss.css"
>>>>>>> jhx
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
<<<<<<< HEAD
      <header className="App-container">
<<<<<<< HEAD
        <IndexRouter></IndexRouter>
      </header>
=======

      <div className="App-container">
        <Router>
          <IndexRouter></IndexRouter>
        </Router>
      </div>

>>>>>>> jhx
    </div>
  );
}
export default App;
=======
        {/* <IndexRouter></IndexRouter> */}
        <Index></Index>
      </header>
    </div>
  )
}
export default App
>>>>>>> wyy1
