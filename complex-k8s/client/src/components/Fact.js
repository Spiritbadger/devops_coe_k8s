import React from 'react'

const Fact = ({ fact }) => (
  <div className="speech-bubble">
    <p>{fact}</p>
    <div className="speech-bubble-arrow"></div>
  </div>
)

export default Fact
