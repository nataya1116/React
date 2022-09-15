import React from 'react'

const Week = (data) => {
    const { day, cName } = data;
  return (
    <div className={cName}>{ day }</div>
  )
}

export default Week