import React from 'react'
import { Header, Body } from '../com'

const Shop = ({isLogin}) => {
  return (
    <div className='Shop'>
      <Header title="상점 페이지"/>
      <Body isLogin={isLogin} path="/detail/1/10/s" name="1번 상품으로 이동"/>
      <Body isLogin={isLogin} path="/detail/2/10/셔츠g" name="2번 상품으로 이동"/>
      <Body isLogin={isLogin} path="/detail/3/10/셔츠a" name="3번 상품으로 이동"/>
      <Body isLogin={isLogin} path="/detail/4/10/셔츠3e" name="4번 상품으로 이동"/>
    </div>
  )
}

export default Shop