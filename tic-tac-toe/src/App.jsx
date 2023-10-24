import { useState } from 'react'
import './App.css'

function App() {
  const [gameboard, setGameboard] = useState([
    {
      id: 1,
      value: 'X',
    },
    {
      id: 2,
      value: 'O',
    },
    {
      id: 3,
      value: 'X',
    },
    {
      id: 4,
      value: 'X',
    },
    {
      id: 5,
      value: 'X',
    },
    {
      id: 6,
      value: 'O',
    },
    {
      id: 7,
      value: ' ',
    },
    {
      id: 8,
      value: ' ',
    },
    {
      id: 9,
      value: 'X',
    },
  ])
  console.log(gameboard)
  return (
    <>
      <div className="screen">
        <h1>Tic Tac Toe Game</h1>
        <div className="game-board">
          {gameboard.map((square) => {
            return (
              <div key={square.id} className="game-square">
                <button>{square.value}</button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
