import './App.css';
import Board from './components/Board'
import React,{useState} from 'react'
import ScoreBoard from './components/ScoreBoard';
import ResetBtn from './components/ResetBtn';

function App() {
  const Win_Conditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [checkScore, setCheckScore] = useState({xScore:0,oScore:0})
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick =(boxIndex)=>{
    const updateBoard = board.map((ele,index)=>{
      if(index === boxIndex ){
        return xPlaying ? "X" : "O";
      }
      else{
        return ele;
      }
    })

    setBoard(updateBoard);

    const winner = checkWinner(updateBoard)

    if(winner){
      if(winner==="O"){
        let {oScore} = checkScore;
        oScore+=1
        setCheckScore({...checkScore,oScore})
      }
      else{
        let {xScore} = checkScore;
        xScore+=1
        setCheckScore({...checkScore,xScore})

        }
    }
    setXPlaying(!xPlaying);
  }

  const checkWinner =(board)=>{
    for(let i = 0; i <Win_Conditions.length;i++){
      const [x,y,z] = Win_Conditions[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true);
        return board[x];
      }
    }
  }

    const resetBoard = ()=>{
      setGameOver(false);
      setBoard(Array(9).fill(null))
    }

  return (
    <div className="App">
      <ScoreBoard scores = {checkScore}/>
      <Board board={board} onClick={gameOver?resetBoard: handleBoxClick}/>
      <ResetBtn resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
