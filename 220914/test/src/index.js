import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// root 태그의 위치는 public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
// root  태그 선택자로 가져와서 내부에 랜더링을 한다.
// <React.StrictMode> 오류나 로그를 띄워준다. 없어도 무방하다.
root.render(
    <App />
);

reportWebVitals();
