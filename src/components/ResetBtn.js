import React from 'react'
import './ResetBtn.css'

function ResetBtn({resetBoard}) {
  return (
    <div >
        <button className="reset" onClick={resetBoard}>Reset</button>
    </div>
  )
}

export default ResetBtn