import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import reducer from "./reducer";

// applyMiddleware 미들웨어를 적용 시켜주는 함수
// createStore()함수에 두번째 매개변수로 applyMiddleware(thunk) 사용할 미들웨어를 담아서 전달
const middleware = applyMiddleware(thunk);

// 미들웨어를 composeWithDevTools 함수로 감싸주면 크롬 개발자 모드에서 redux-devtools를 사용할 수 있게 된다.
const store = createStore(reducer, composeWithDevTools(middleware));

export default store;