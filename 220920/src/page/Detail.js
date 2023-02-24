import React, { useState } from 'react'
import { Header } from '../com/' //, Body
import { useParams, useSearchParams, Link ,  useLocation} from 'react-router-dom'

// 파라미터 값을 가져오기 위한 방법은 리액트의 내장 함수인 hook을 이용하면 된다.
// useParams 사용
// url 경로에 있는 get 방식의 데이터를 객체의 형대로 불러올 수 있다. useParams함수를 실행해주고 반환된 객체를 가지고 동작한다.

// 검색 쿼리문 
// 입력 값을 저장하려면 useState 처리
// input value를 useState 값에 넣어준다.
// 검색 쿼리문
// useSearchParams() 함수를 실행해서 반환받은 객체를 사용 경로에서 뽑아주는 경로는 ? 뒤에 키 값을 기분으로 ?q= 과 같은 형태는 q라는 키 값이 객체형태로 나온다.
// useSearchParams 함수 실행 후 반환된 객체 가능

// useLocation 현재 경로를 가져올 수 있는 함수 

const Detail = () => {
  const location = useLocation();

  console.log(location);
  const [ search, setSearch ] = useState('');
  const [query, setQuery ] = useSearchParams();  

  const keyInput = (e) => {
    setSearch(e.target.value);
  }

  const params = useParams();
  console.log(params);
  return (
    <div>
    <Header title="로그인 페이지"/>
      {/* <Body path="/shop" name="상점 페이지" item={params}/> */}
      <div>{search}</div>
      <div>너 이거 검색했어 {query.get('q')}</div>
      <input onChange={keyInput}/>
      <Link to={location.pathname+"?q="+search}>검색하기</Link>
    </div>
  )
}

export default Detail