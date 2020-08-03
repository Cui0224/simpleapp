import React from 'react'
import IndexRouter from './router/IndexRouter'
import Index from './router/index'
import './AppCss.css'
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <header className="App-container">
        {/* <IndexRouter></IndexRouter> */}
        <Index></Index>
      </header>
    </div>
  )
}
export default App
