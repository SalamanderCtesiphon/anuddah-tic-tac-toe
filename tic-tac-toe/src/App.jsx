import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [gameboard, setGameboard] = useState([
    {
      id: 1,
      value: ' ',
    },
    {
      id: 2,
      value: ' ',
    },
    {
      id: 3,
      value: ' ',
    },
    {
      id: 4,
      value: ' ',
    },
    {
      id: 5,
      value: ' ',
    },
    {
      id: 6,
      value: ' ',
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
      value: ' ',
    },
  ])

  const [activePlayer, setActivePlayer] = useState('playerX')

  function handleSquareClick(id) {
    gameboard.map((square) => {
      if (square.id === id) {
        if (square.value != ' ') {
          return
        } else {
          if (activePlayer === 'playerX') {
            square.value = 'X'
            setActivePlayer('playerO')
          } else {
            square.value = 'O'
            setActivePlayer('playerX')
          }
        }
      }
    })
    console.log(gameboard)
    return gameboard
  }

  return (
    <>
      <div className="screen">
        <h2>Tic Tac Toe Game</h2>
        <div className="game-board">
          {gameboard.map((square) => {
            return (
              <div key={square.id} className="game-square cell">
                <button onClick={() => handleSquareClick(square.id)}>
                  {square.value}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
