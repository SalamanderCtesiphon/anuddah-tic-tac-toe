import { useState } from 'react'
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
  const [gameWinner, setGameWinner] = useState(null)

  function resetGame() {
    setGameWinner(null)
    setGameboard([
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
  }

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
    const tempArr = []
    gameboard.map((square) => {
      return tempArr.push(square.value)
    })

    if (tempArr[0] === 'X' && tempArr[1] === 'X' && tempArr[2] === 'X') {
      setGameWinner('X wins!')
    } else if (tempArr[0] === 'X' && tempArr[4] === 'X' && tempArr[8] === 'X') {
      setGameWinner('X wins!')
    } else if (tempArr[0] === 'X' && tempArr[3] === 'X' && tempArr[6] === 'X') {
      setGameWinner('X wins!')
    } else if (tempArr[1] === 'X' && tempArr[4] === 'X' && tempArr[7] === 'X') {
      setGameWinner('X wins!')
    } else if (tempArr[2] === 'X' && tempArr[5] === 'X' && tempArr[8] === 'X') {
      setGameWinner('X wins!')
    } else if (tempArr[3] === 'X' && tempArr[4] === 'X' && tempArr[5] === 'X') {
      setGameWinner('X wins!')
    } else if (tempArr[6] === 'X' && tempArr[7] === 'X' && tempArr[8] === 'X') {
      setGameWinner('X wins!')
    } else if (tempArr[2] === 'X' && tempArr[4] === 'X' && tempArr[6] === 'X') {
      setGameWinner('X wins!')
    } else if (tempArr[0] === 'O' && tempArr[1] === 'O' && tempArr[2] === 'O') {
      setGameWinner('O wins!')
    } else if (tempArr[0] === 'O' && tempArr[4] === 'O' && tempArr[8] === 'O') {
      setGameWinner('O wins!')
    } else if (tempArr[0] === 'O' && tempArr[3] === 'O' && tempArr[6] === 'O') {
      setGameWinner('O wins!')
    } else if (tempArr[1] === 'O' && tempArr[4] === 'O' && tempArr[7] === 'O') {
      setGameWinner('O wins!')
    } else if (tempArr[2] === 'O' && tempArr[5] === 'O' && tempArr[8] === 'O') {
      setGameWinner('O wins!')
    } else if (tempArr[3] === 'O' && tempArr[4] === 'O' && tempArr[5] === 'O') {
      setGameWinner('O wins!')
    } else if (tempArr[6] === 'O' && tempArr[7] === 'O' && tempArr[8] === 'O') {
      setGameWinner('O wins!')
    } else if (tempArr[2] === 'O' && tempArr[4] === 'O' && tempArr[6] === 'O') {
      setGameWinner('O wins!')
    }
    return gameboard, gameWinner
  }

  return (
    <>
      <div className="screen">
        <h1>Tic Tac Toe Game</h1>
        <button onClick={resetGame} id="game-btn">
          Reset Game
        </button>
        {gameWinner === null ? (
          <h2>
            {activePlayer === 'playerX' ? "Player X's turn" : "Player O's turn"}
          </h2>
        ) : (
          ''
        )}
        <div className="game-board">
          {gameWinner === null ? (
            gameboard.map((square) => {
              return (
                <div key={square.id} className="game-square cell">
                  <button onClick={() => handleSquareClick(square.id)}>
                    {square.value}
                  </button>
                </div>
              )
            })
          ) : (
            <h2>{gameWinner}</h2>
          )}
        </div>
      </div>
    </>
  )
}

export default App
