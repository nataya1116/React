import React, { useState } from 'react'

const Block = (data) => {

    const {isBomb, gameover} = data;

    const [content, setContent] = useState("");
    
    const touchBlock = () => {
        checkTouch(isBomb);
    }
    function checkTouch(isBomb) {
        if(isBomb){
            setContent(content + "꽝");
            gameover();
        }
    }

  return (
    <div onClick={touchBlock} className="block">{content}</div>
  )
}

export default Block