import React from "react";
import { useDispatch } from "react-redux";

const Count = () => {
  //useDispatch 함수를 사용하고
  const dispatch = useDispatch();
  // 반환된 dispatch를 사용해서 Action을 던질수 있다.
  // dispatch 함수를 사용하는데 매개변수로 객체를 전달해줍니다.
  // 객체의 규칙은 {type, payload}
  // type : 동작시킬 행동의 이름
  // payload : 선택사항 있어도 되고 없어도 괜찮은데 우리가 데이터 전달이 필요하면 사용

  const Add = () => {
    dispatch({ type: "ADD" });
  };
  const Remove = () => {
    dispatch({ type: "REMOVE" });
  };

  return (
    <div>
      <button onClick={Add}>+</button>
      <button onClick={Remove}>-</button>
    </div>
  );
};

export default Count;
