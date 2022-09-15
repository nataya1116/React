import React from 'react'

const Day = (data) => {
  const { day, cName } = data;
  return (
    <div className={cName}>
      {day}
    </div>
  )
}

export default Day