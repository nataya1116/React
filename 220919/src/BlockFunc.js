import React, { useEffect, useState } from 'react'

const BlockFunc = () => {
  const [num, setNum] = useState(0);

  // useEffect 생명주기 함수를 함수형에서도 사용할 수 있게 해줌. 리액트에서 지원해주는 유요한 훅
  // 빈 배열은 componentDidMount라는 것   
  useEffect(()=>{
    // 여기서 데이터를 불러와서 UI에 뿌려준다.
    console.log("componentDidMount");
    // console.log(num);
  }, []);

  // componentDidUpdate()는 주시하는 값을 넣어서 생성해준다. 주시하는 값을 추가하려면 배열에 값을 넣으면 된다. 주시하던 값이 바뀌면 실행되는 함수이다.
  // componentDidMount+componentDidUpdate  이며 조건으로 처리해줘야 한다.
  useEffect(()=>{
    // 여기서 데이터를 불러와서 UI에 뿌려준다.
    console.log("componentDidUpdate");
    console.log(num);
  }, [num]);

  const add = () => {
    setNum(num + 1);
    // console.log(num);
  }
  
  return (
    <div>
        <button onClick={add}>증가</button>
    </div>
  )
}

export default BlockFunc