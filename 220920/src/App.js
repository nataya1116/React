import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'; //, Router
import { Main, Login, Shop, Detail, MyPage } from './page';
import { useState } from 'react';

function App() {
  // Routes : 페이지를 스위치 해주는 일을 해준다. 전 버전은 Switch였다.
  // Route : 페이지들을 정의해준다. Route에는 path와 element 두가지 props 값이 필요하다. path는 경로 element는 보여줄 경로의 컴포넌트(path에 해당되는 경로에서 보여줄 컴포넌트)
  // path props 값이 중복될 경우 하나의 컴포넌트만 나오며 먼저 선언된 것이 나온다.

  // 로그인이 되었는지 확인할 useState
  const [login, setLogin] = useState(false);

  // 페이지의 접속 권한에 따라 리다이렉트 처리
  // Navigate라는 컴포넌트를 사용해서 리다이렉트를 하게 만들어줄 수 있다.
  // props를 받아 to 속성에 경로를 작성하면 된다.
  // 리다이렉트 컴포넌트를 생성한 것이다.
  const Redirect = () => {
    return login ? <MyPage/> : <Navigate to="/"/>
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main isLogin={login}/>} />
        <Route path='/login' element={<Login login={setLogin}  isLogin={login}/>} />
        <Route path='/shop' element={<Shop isLogin={login}/>} />
        <Route path='/detail/:id/:num/:name' element={<Detail isLogin={login}/>} />
        <Route path='/mypage' element={<Redirect/>} />
      </Routes>
    </div>
  );
}

export default App;
