import { useState } from 'react';
import './App.css';

// 3. 묵찌빠 게임
//      플레이어와 컴퓨터의 초기 돈 10000원
//      돈을 베팅하고 게임 시작
//      가위바위보 이후에 이기는쪽이 묵찌빠 시도
//      묵찌빠 끝나서 이기면 돈 획득
//      관객이 팁으로 랜덤하게 베팅한 돈의 10~30% 지급




function App() {
  const [comMoney, setComMoney] = useState(10000);
  const [userMoney, setUserMoney] = useState(10000);

  setMoney(comMoney, 100, setComMoney);
  setMoney(userMoney, 100, setUserMoney);

  return (
    <div className="App">
      
    </div>
  );
}

function setMoney(money, increase, setFunc) {
  setFunc(money+increase);
}

export default App;
