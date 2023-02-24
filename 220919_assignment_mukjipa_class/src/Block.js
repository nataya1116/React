import React, { Component } from 'react'

export default class Block extends Component {

  render() {
    return (
      <div className='Block'>
        <h4>{this.props.name}</h4>
        {/* 부모 컴포넌트에서 선택한 이미지를 props 값으로 받아온다 */}
        {/* 값이 있을 때 실행 && 값이 없어도 오류가 나오지 않는다. */}
        <img src={this.props.data && this.props.data.img} alt=""/>
        <h5>{this.props.result}</h5>
      </div>
    )
  }
}

