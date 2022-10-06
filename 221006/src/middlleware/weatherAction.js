import axios from "axios";
// axios
// 패치나 아작스(제이쿼리)보다는 axios를 사용하는 것을 추천한다.
// 자바스크립트에 fetch가 있는대 프레임워크에선 ajax를 구현할때 axios를 주로 사용한다. 속성 값은 url이 필수이며 나머지는 옵션이다. medhod 기본값은 get방식이다. 

// 설치 명령어
// npm i axios

// get요청 방식

function getWeather(name) {
    // thunk가 해주는 일이 Action Createors라는 함수를 만들어 준다. Action Createors 함수는 함수를 반환한다. thuck는 dispatch를 딜레이 시켜주는 역할을 한다.

   // action 함수는 함수를 반환한다. dispatch랑 getState는 둘 다 함수

   return async(dispatch, getState) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3a3856aeb651c03cb22fa0e6cc1a41ce`;
        const data = await axios({url});
        // console.log(data);
        // console.log(getState());
        dispatch({type: "GET_WEATHER_DATA", payload : data});
        // console.log(getState());
        // getState() 함수는 store 저장소에 있는 state 객체를 반환해준다.
   }
}

export const weather = {getWeather};