// combinReducers() 함수는 redux에서 지원해주며 리듀서 함수를 하나로 합쳐준다. 리듀서는 객체로 전달하면된다. 객체로 전달하면 합쳐지며 저장소에 합쳐진 리듀서 함수가 반영된다.
import { combineReducers } from 'redux'

import logins from './login'
import weather  from './weather'

// useSelect에서 접근할때는 combineReducers()에 저장된 변수명 기준
const rootReducer = combineReducers({logins, weather});

export default rootReducer;