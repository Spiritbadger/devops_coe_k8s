import React, { useState } from 'react'
import './App.css';
import Fact from './components/Fact'
import Button from './components/Button'

const App = () => {

    const facts = [
        'Click me!',
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a unicorn can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'If you join forces with the unicorns, you will gain a powerful ally.'
    ]

    const [selected, setSelected] = useState(0)

    const handleNextClick = () => {
        setSelected(Math.floor(Math.random() * facts.length))
    }
    return (
        <div className="App">
            <div className="App-content">
                <h1 className="App-title">Learn DevOps From Space Unicorn!</h1>
                <Fact fact={facts[selected]} />
                <Button onClick={handleNextClick} />
            </div>
        </div>
    );
}

export default App;
