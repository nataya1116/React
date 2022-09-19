import React from 'react'

const Block = (props) => {
    const {data, name} = props;
    let result = props.result;

    return (
    <div className='Block'>
        <h4>{name}</h4>
        {/* 부모 컴포넌트에서 선택한 이미지를 props 값으로 받아온다 */}
        {/* 값이 있을 때 실행 && 값이 없어도 오류가 나오지 않는다. */}
        <img src={data && data.img} alt=""/>
        <h5>{result}</h5>
    </div>
  )
}

export default Block