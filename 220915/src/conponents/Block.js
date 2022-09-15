import { useState } from "react";


// 자신의 값이 달라지면 반응해서 알려주고 리액트는 그 부분만 리랜더링 한다.
const Block = (data) => {
    // console.log(data);
    // const {num} = data;
    // useState 함수의 인자는 초기값이다. 리턴되는 첫번째 배열의 요소는 사용할 변수, 요소는 이 값을 수정할 수 있는 함수. 여기서는 setnum을 이용해서만 값을 바꿀수 있다.
    // useState 같이 유용한 함수들을 리액트 훅이라고 부른다.
    const num = 0;
    const [count, setNum] = useState(num);
    function add(){ 
        setNum(count+1);
        console.log("클릭됨");
        // 비동기적으로 들어가기 때문에 콘솔과 화면의 값이 다르게 나온다.
        console.log(count);
    }
  return (
    <>
        {/* 
            내부의 값을 변경시켜도 태그에 바뀐 값이 보이지는 않는다. 
            useState를 사용해서 리액트에게 값을 주시하게 만들고 변화가 있으면 다시 랜더링하게 한다. 변수를 전부 보고 다 그리면 비용이 많이 발생되기 때문이다.
        */}
        <div className='block'>{count}</div>
        <button onClick={add}>더하기</button>
    </>
  )
}

export default Block