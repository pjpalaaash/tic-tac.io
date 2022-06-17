
import React from 'react'
import Box from './Box'

import './Board.css'

function Board({board,onClick}) {
  return (
    <div className="board">
        {board.map((ele,ind)=>{

            return <Box value={ele} onClick={() => ele===null && onClick(ind)} ind={ind} />
        })}
    </div>
  )
}

export default Board