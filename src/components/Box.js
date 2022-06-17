

import React from 'react'

import './Box.css';

function Box({value,onClick,ind}) {
  const style = value==="X"?"box x": "box o";  
  return (
    <div>
      <button className={style} onClick={onClick} key={ind}>{value}</button>
    </div>
  )
}

export default Box
