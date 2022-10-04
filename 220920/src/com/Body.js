import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Body = ({name, path, item,  isLogin}) => {
    // Link 리액트에서 a태그 같은 역할을 해준다.
    // Link 컴포넌트를 이용해서 경로를 바꿔주고 컴포넌트를 교체해서 보여준다. 라우터간의 이동을 할 수 있게 도와준다. props 중 to에 경로를 입력하면 이동한다.

    // useNavigate
    // Link와 마찬가지로 페이지 이동을 할 때 사용하는 태그이다. 사용방법은 함수 실행 이후 반환받은 객체로 사용을 한다. onClick 이벤트에 사용하기 적당하다
    const nav = useNavigate();
  return (
    <div className='Body'>
        <Link to={path}>{name}로 이동</Link>
        <br/>
        <button onClick={()=>{nav(path)}}>{name}로 이동 버튼</button>
        {item && item.id ? <div>{item.id}번 상품</div> : null }
        {item && item.num ? <div>{item.num}개</div> : null }
        {item && item.name ? <div>이름 : {item.name}</div> : null }
        {isLogin ? <div>로그인 되었음</div> : <div>로그인 안됨</div>}
    </div>
  )
}

export default Body