import { useDispatch, useSelector } from 'react-redux';
import './App.css';
// import axios from 'axios';
import { weather, logins } from './middlleware'
import { useEffect, useState } from 'react';
// get 요청 방식
// axios({url : 'url'});

// post 요청 방식
// axios({ url : 'url' method : 'post', data : {} })

function App() {
  const dispatch = useDispatch();
  // async function getWeather() {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=3a3856aeb651c03cb22fa0e6cc1a41ce`;
  //   const data = await axios({url});
  //   console.log(data);
  // }
  // getWeather();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const getWeather = (name) => {
    dispatch(weather.getWeather(name));
  }
  
  
// useSelect에서 접근할때는 combineReducers()에 저장된 변수명 기준
  const weatherData = useSelector(state=>state.weather.weatherData);
  const isLogin = useSelector(state=>state.logins.isLogin);
  const userName = useSelector(state=>state.logins.id);

  // 컴포넌트 랜더링 후 실행되는 함수
  useEffect(()=>{
    console.log(weatherData);
  }, [weatherData])


  const login = () => {
    dispatch(logins.login(id, pw));
  }

  const logout = () => {
    dispatch(logins.logout());
  }

  return (
    <div className="App">
      <input onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={()=>{getWeather(name)}}>날씨 검색</button>
      <div>지금 {weatherData?.data?.name}의 날씨는 : {weatherData?.data?.weather[0]?.main}<br/>
      <label>아이디</label> <br/>
      <input onChange={(e)=>{setId(e.target.value)}}/><br/>
      <label>비밀번호</label> <br/>
      <input onChange={(e)=>{setPw(e.target.value)}}/><br/>
      <button onClick={login}>로그인</button>
      <div>로그인 됨?</div>{isLogin ? <div>{userName} 유저 로그인 됨
      <button onClick={logout}>로그아웃</button>
      </div> : <div>로그인 안됨 </div>} 
      </div>
    </div>
  );
}

export default App;
