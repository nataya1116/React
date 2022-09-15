import './App.css';
import Week from './components/Week';
import Day from './components/Day';

function App() {
  const month = new Date().getMonth() + 1;
  return (
    <div className="App">
      
      <h2>{month}월</h2>
      <div className='weeks'>
      {weekTagCreate()}
      </div>
      {dateTagCreate()}
      
    </div>
  );
}

function weekTagCreate() {
  const weekStrArr = ["일", "월", "화", "수", "목", "금", "토"];
  const weekTagArr = [];
  weekStrArr.forEach((el) => {
    weekTagArr.push(<Week cName="week" day={el}/>);
  });
  console.log(weekTagArr);
  return weekTagArr;
}

function dateTagCreate(){

  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;

  const startDay = Number(new Date(thisYear, thisMonth - 1, 1).getDay());
  const startWeek = findStartWeek(startDay);

  const lastDate = new Date(thisYear, thisMonth, 0).getDate();

  const weekNums = Math.ceil((lastDate + startWeek)/7);

  const dateTagArr = [];
  
  let day = 1;
  for (let wi = 1; wi <= weekNums; wi++) {
    const tempWeek = [];
    for (let di = 1; di <= 7; di++) {

      if(wi === 1){
        if(di >= startWeek){
          tempWeek.push(<Day cName="day" day={day}/>); 
          day++;
        }else{
          tempWeek.push(<Day cName="day" day=""/>);
        }
        continue;
      }

      if(day <= lastDate){
        tempWeek.push(<Day cName="day" day={day}/>); 
        day++;
      }else{
        tempWeek.push(<Day cName="day" day=""/>);
      }
      
    }
    dateTagArr.push(<div className='days'>{tempWeek}</div>);
  }

  return dateTagArr;
}

function findStartWeek(startDay) {
  const weekObj = {
    sun : 6,
    mon : 0,
    tue : 1,
    thu : 2,
    web : 3,
    fri : 4,
    sat : 5 
  };

  let startWeek;
  for (const key in weekObj) {
    if(weekObj[key] !== startDay) continue;
    if(weekObj[key] === weekObj['sun']){
      startWeek = 1;
    }else{
      startWeek = startDay +1;
    }
  }

  return startWeek;
}
export default App;
