import { useRef, useState } from 'react';
import './App.css';
import Block from './conponents/Block';

function App() {
  const blocks = useRef();
  const blockNums = 25;
  const randNumArr = randNum(blockNums)
  const BlockArr = [];

  const [isGameover, setGameover] = useState(false);

  const gameover = () => {
    setTimeout(()=>{
      gameoverView(setGameover);
    }, 500);
  }
  
  for(let i = 1; i <= blockNums; i++){
    let isBomb = false;
    randNumArr.forEach(el => {
      if(i === el){
        isBomb = true;
      }
    });

    BlockArr.push(<Block isBomb={isBomb} gameover={gameover}/>)
  }

  

  return (
    <div className="App" >
      {isGameover ? <h2>Gameover</h2>:<div ref={blocks} className="blocks"> 
        {BlockArr}
      </div>}
      
    </div>
  );
}

function gameoverView(setGameover) {
  console.log("gameover");
  setGameover(true);
}

function randNum(blockNums) {
  const randNumArr = [];
  do {
    const randNum = Math.floor(Math.random() * (blockNums - 1)) + 1;
    let isOverLap = false;
    randNumArr.forEach(el => {
      if(el === randNum) isOverLap = true;
    });

    if(isOverLap) continue;
    else randNumArr.push(randNum);

  } while (randNumArr.length < 5);

  return randNumArr;
}

export default App;
