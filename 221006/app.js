// 리덕스 미들웨어

// 리덕스는 state를 관리해주는 저장소 역할을 한다.
// 리덕스 플로우 차트
// UI -> Dispatch -> Action -> Store(Reducer)(state) => UI
// 리덕스는 동기적으로 처리가 되는대 변경 값이 있으면 바로 동작해서 API같은 데이터를 불러올 때 비동기 작업에 어려움이 있다. API 요청을 해서 데이터를 받은 이후에 작업을 해야하기 때문에 리덕스 미들웨어를 사용한다.
// UI -> Dispatch -> ActionFuction -> Middleware(리턴 함수) -> Action -> Store(Reducer)(state) -> UI

// 미들웨어는 양쪽을 연결해주고 데이터를 주고 받을 수 있도록 중간에서 매개 역할을 담당하는 소프트웨어. 컴퓨터에 있는 프로세스들에게 어떤 서비스를 사용할 수 있도록 연결해주는 소프트웨어를 말한다.

// 리덕스 미들웨어에는 saga, thunk
// redux-thunk 적용하기도 쉽고 다른 서비스에서도 적용이 편해서 많이 사용한다. 

// 설치 명령어
// npm install redux-thunk

// redux 저장소를 만들고 만드는 와중 리듀서 함수를 적용시켜준다.
// react-redux 만들어진 저장소를 사용할때 편하게 사용할 수 있도록 훅 함수를 지원해준다.

// 1. 리덕스, 리덕스 리액트 설치
// 2. store.js 파일 만들기(createStore)
// 3. reducer.js 파일 만들기 만든 reducer createStore 인자로 넣음
// 4. 완성된 저장소를 index.js에 가져와서 App 컴포넌트를 Provider 컴포넌트로 감싸준다.


// 리덕스를 사용할때 유용한 툴 redux devtools
// action으로 변경한 state 값을 바로바로 볼 수 있다.
// 크롬 https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=ko-KR

// npm 설치 명령어
// npm i redux-devtools-extension
// import {composeWithDevTools} from 'redux-devtools-extension'
// 설치하고 미들웨어를 composeWithDevTools 함수로 감싸주면 된다.
// 크롬 개발자 모드 탭에서 >> 누르면 redux 생기고 값과 변화 등의 상태를 볼 수 있다.