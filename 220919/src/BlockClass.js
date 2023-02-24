import React, { Component } from 'react'

// 생명주기
// 생명주기는 생성, 랜더, state 변화 등을 이야기하며 이러한 분기를 컨트롤 할 수 있게 리액트에서 지원해주는 함수들을 lifecycle이라고 한다.

// 1. mounting : 생성 후 컴포넌트가 시작될때 처음 한번 실행된다.
// 2. updating : state가 업데이트 되고 UI가 그려질때
// 3. unmounting : 컴포넌트가 화면에서 사라질때

// UI 세팅 과정
// constructure -> render -> dom updating -> componentDidMount
// state 업데이트 후
// componentDidUpdate(state 변경 후 업데이트 해주는 함수)

// 클래스 컴포넌트에만 있는 생명주기 함수가 있음??

// 기본 구조는 함수형과 큰 차이는 엇으나 클래스로 선언되었고 리액트에서 제공하는 컴포넌트를 상속 받아온다.
export default class BlockClass extends Component {
  // constructor lifecycle 함수 중 하나이며 생성자이다.
  // 컴포넌트가 생성되면 제일 처음으로 실행된다.
  constructor(props){
    // react 클래스 컴포넌트의 부모 클래스는 react.Component가 된다. this.props를 사용하기 위해서 super를 사용. super를 사용하지 않으면 생성자 내부에서 this 사용 불가 
    super(props);
    // 함수형에서 useState함수를 썼지만...
    // 클래스 컴포넌트에서는  state 값을 객체로 사용한다.
    // state 값이 변경되면 관련된 모든 컴포넌트 들이 리랜더링 된다.
    // const [num, setNum] = useState(0); 아래와 동일
    // const [num, setName] = useState("tq");
    this.state = {
      num : 0,
      name : "tq"
    }
    console.log("constructor");
  }

  componentDidMount(){
    // componentDidMount()함수는 UI가 생성 된 후에 호출되기 때문에 데이터베이스 관련 작업을 처리한다.
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    // this.state는 비동기 값이지만 componentDidUpdate()함수는 state 값이 수정된 후에 호출되므로 수정된 값을 출력할 수 있다.
    console.log(this.state);
    // componentDidUpdate() 
    console.log("componentDidUpdate");
  }

  add = () => {
    // class 컴포넌트에서 state 값을 변하게 하려면 setState() 함수를 이용해서 값을 수정한다.
    // setState 함수의 매개변수 안에 객체에서 바꾸고 싶은 키와 값을 넣어준다.
    // setState의 인자는 객체이고 객체 안에 멤버변수들을 넣어서 값을 수정할 수 있다.
    this.setState({num:this.state.num+1, name:this.state.name+"후후"});
    // console.log(this.state);
  } 
  render() {
    console.log("render");
    return (
      <div>
        {/* class 컴포넌트에는 함수를 전달할 때도 this를 작성해야 한다. 함수형 컴포넌트를 선호하는 이유 중에 하나이다.*/}
        <button onClick={this.add}>버튼</button>
        {/* props 값을 사용. 함수와 마찬가지로 부모 컴포넌트에서 속성 값처럼 전달해줄 수 있다. */}
        <div>{this.props.test}</div>
      </div>
    )
  }
}
