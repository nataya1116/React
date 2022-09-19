import './App.css';
import {img01, img02, img03} from './img'
import Block from './Block';

import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      userSelect : null,
      comSelect : null,
      result : ""
    }
  }

  select = {
    scissors : {
      name : "가위",
      img : img01
    },
    rock : {
      name : "바위",
      img : img02
    },
    paper : {
      name : "보",
      img : img03
    }
  }

  userClick(temp) {
    
    const userResult = this.select[temp];

    const arr = Object.keys(this.select);
    // 컴퓨터는 랜덤으로 값이 전달되어야 한다. 객체에서 키 값만 뽑아서 배열로 만든다.
    const randNum = Math.floor(Math.random() * 3);
    const comResult = this.select[arr[randNum]];

    const player = userResult.name;
    const computer = comResult.name;

    let resultStr;
    if(player === computer){
      resultStr = '무승부';
    }

    else if(player === "가위"){
      if(computer === "보") resultStr = '승리';
      else resultStr = "패배";
    }

    else if(player === "바위"){
      if(computer === "가위") resultStr = '승리';
      else resultStr = "패배";
    }

    else if(player === "보"){
      if(computer === "바위") resultStr = '승리';
      else resultStr = "패배";
    }

    this.setState({userSelect : userResult, 
                  comSelect : comResult,
                  result : resultStr })

  }

  componentDidUpdate(){
    // this.state는 비동기 값이지만 componentDidUpdate()함수는 state 값이 수정된 후에 호출되므로 수정된 값을 출력할 수 있다.
    console.log(this.state);
    console.log(this.state.userSelect);
  }

  render() {
    return (
      <div>
      <div  className="App">
        <Block data = {this.state.userSelect} name = "user" result={this.state.result}/>
        <Block data = {this.state.comSelect} name = "com" result={this.state.result === "승리" ? "패배" : this.state.result === "패배" ? "승리" : this.state.result}/>
      </div>
      <div>
        <button onClick={()=>{this.userClick("scissors")}}>가위</button>
        <button onClick={()=>{this.userClick("rock")}}>바위</button>
        <button onClick={()=>{this.userClick("paper")}}>보</button>
      </div>
    </div>
    )
  }
}
