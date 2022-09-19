import { useState } from 'react';
import './App.css';
import {img01, img02, img03} from './img'
import Block from './Block';

// 3. 묵찌빠 게임
//      플레이어와 컴퓨터의 초기 돈 10000원
//      돈을 베팅하고 게임 시작
//      가위바위보 이후에 이기는쪽이 묵찌빠 시도
//      묵찌빠 끝나서 이기면 돈 획득
//      관객이 팁으로 랜덤하게 베팅한 돈의 10~30% 지급

// 1. 플레이어 컴포넌트 영역


function App() {
  // const [comMoney, setComMoney] = useState(10000);
  // const [userMoney, setUserMoney] = useState(10000);

  // setMoney(comMoney, 100, setComMoney);
  // setMoney(userMoney, 100, setUserMoney);

  // const winOrLose = [
  //   []
  // ];
  // winOrLose[0][0] = null;
  // winOrLose[0][1] = 
  
  // const SCISSORS = 0;


  const select = {
    scissors : {
      name : "가위",
      img : img01
    },
    rock : {
      name : "바위",
      img : img02
    },
    paper : {
      name : "보",
      img : img03
    }
  }

  // 유저가 선택한 값을 담아두고 주시해야 한다. 선택하면 이미지를 바꿔줘야하기 때문이다. 유저의 선택값을 담는다.
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");

  function userClick(temp) {
    
    setUserSelect(select[temp]);

    const arr = Object.keys(select);
    // 컴퓨터는 랜덤으로 값이 전달되어야 한다. 객체에서 키 값만 뽑아서 배열로 만든다.
    const randNum = Math.floor(Math.random() * 3);
    setComSelect(select[arr[randNum]]);

    const player = select[temp].name;
    const computer = select[arr[randNum]].name;

    if(player === computer){
      setResult('무승부');
    }

    else if(player === "가위"){
      if(computer === "보") setResult('승리');
      else setResult("패배");
    }

    else if(player === "바위"){
      if(computer === "가위") setResult('승리');
      else setResult("패배");
    }

    else if(player === "보"){
      if(computer === "바위") setResult('승리');
      else setResult("패배");
    }

  }
  
  // const arr = Object.key(select)

  
  // 1. 객체의 값이 필요해서 userClick 함수를 만들었음 그 값을 저장해주는 userSelect, useState함수를 통해서 만들어줌
  // 2. 버튼을 클릭했을 때 함수가 실행이 되고 state값이 바뀌어서 리랜더링 되고 자식인 Block도 리랜더링 된다.
  // Block에 우리는 userClick를 실행하고 setUserSelect 함수로 변경한 userSelect 값을 props로 넘겨준다. Block에서는 props로 넘겨받은 값을 사용해서 img의 경로를 받아서 이미지를 보여줬다. 부모가 리랜더링되서 자식도 변한값에 따라 리랜더링 된 것이다.

  return (
    <div>
      <div  className="App">
        <Block data = {userSelect} name = "user" result={result}/>
        <Block data = {comSelect} name = "com" result={result === "승리" ? "패배" : result === "패배" ? "승리" : result}/>
      </div>
      <div>
        <button onClick={()=>{userClick("scissors")}}>가위</button>
        <button onClick={()=>{userClick("rock")}}>바위</button>
        <button onClick={()=>{userClick("paper")}}>보</button>
      </div>
    </div>
  );
}

// function setMoney(money, increase, setFunc) {
//   setFunc(money+increase);
// }

export default App;
