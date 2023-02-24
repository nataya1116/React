import React from 'react'

// 컴포넌트로 작업을 할때의 장점은 태그화할 수 있기 때문에 코드의 재사용성이 용이해지고 유지보수가 편리해진다.
// 파일 명의 대문자를 쓰는 이유가 파일명으로 그대로 컴포넌트명이 생성된다.

// 리액트의 데이터 구조는 단향뱡으로 위에서 아래로 데이터를 전달해 줄 수 있으나 아래에서 위로는 전달 할 수 없다.
// 여기서 받은 num 매개변수는의 명칭은 props이다.
const Mycom = (num) => {
    const {name, age, cName} = num;
    console.log(num);
    return (
        // 리액트에서는 class 속성을 사용할 수 없다. 대신 className 속성을 사용해야 한다.
        // com이라는 공통 클래스를 부여해준다.
        <div className={cName + " com"}>
            {/* {}중괄호는 자바스크립트를 사용하겠다는 의미이다. 변수명을 작성하면 값이 출력된다. */}
            {name}<br/>
            {age}<br/>
            나는 컴포넌트
        </div>
        
    )
}

// default는 하나만 내보낼때 사용
export default Mycom
