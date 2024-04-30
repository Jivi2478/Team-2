import React from 'react'
import './home.css';

function Home() {
  return (
    <div class='mainhome'>
      <h1 class='hometitle'>Offer Letter Generator</h1>
      <h6 class='homesub'>Just a simple PDF offer letter generator</h6>
      <div class='homegenbtn'>
        <a href='http://localhost:8080/' target="_blank" rel="noopener noreferrer"><button>Generate Offer</button></a>
        {/* <a href='http://localhost:8080/' target="_blank" rel="noopener noreferrer">Generate Offer</a> */}
      </div>
    </div>
    
  )
}

export default Home