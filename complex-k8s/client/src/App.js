import React, { useState } from 'react'
import './App.css';
import Fact from './components/Fact'
import Button from './components/Button'
import factService from './services/facts'

const App = () => {

  const [content, setContent] = useState('Let me teach you facts about DevOps!')

  const handleNextClick = () => {
    let randomId = Math.floor(Math.random() * (8 - 1 + 1)) + 1
    factService
      .getRandom(randomId)
      .then(returnedFact => {
        setContent(returnedFact)
      })
  }

  return (
    <div className="App">
      <div className="App-content">
        <h1 className="App-title">Learn DevOps From Space Unicorn!</h1>
        <Fact fact={content} />
        <Button onClick={handleNextClick} />
      </div>
    </div>
  )
}

export default App;
