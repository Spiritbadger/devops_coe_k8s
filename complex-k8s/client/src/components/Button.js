import React from 'react'
import buttonImage from './unicorn-button.png'

const Button = ({ onClick }) => (
    <div>
        <button className="App-button" onClick={onClick}>
            <img src={buttonImage} height="300" alt="submit" /><br />Klik me!
        </button >
    </div>

)

export default Button
