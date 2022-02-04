import React from 'react';
import Articles from './Articles'
import "./index.css"
const App = () => {
  return (
    <>
      <div className="hero container">
        <h1 className = "title">Hello there! <span>I'm Evan Xu.</span></h1>
        <h2 className= "subtitle">I think I'm working on something good here, so check it out below :)</h2>
      </div>
      <Articles />
    </>
  )
}

export default App;