// App.css 파일을 가져오는 구문
import './App.css';
import Mycom from './components/Mycom';

// App이라는 태그로 사용할 수 있으며 무조건 태그로 감싸줘야만 사용할 수 있다.
function App() {
  return (
    // 리액트에서는 클래스 속성을 사용할 수 없으며 대신 className 속성을 사용할 수 있다.
    <div className="App">
      {/* 네임 태그가 아니라 키 값으로 부모 컨포넌트가 자식에게 데이터를 전달하는 방법이다. */}
     <Mycom name="첫째" age="20" cName="one"/>
     <Mycom name="둘째" age="20" cName="two"/>
     <Mycom name="셋째" age="20" cName="three"/>
    </div>
  );
}


export default App;
