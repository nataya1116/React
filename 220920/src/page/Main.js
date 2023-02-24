import React from 'react'
import { Header, Body } from '../com'


const Main = ({isLogin}) => {
  return (
    <div>
      <Header title="메인 페이지"/>
      <Body path="/login" name="로그인 페이지" isLogin={isLogin}/>
    </div>
  )
}

export default Main