import './App.css';
import Card from './Components/Card'
import ExpensesFilter from './Components/ExpensesFilter';
import ExpenseItem from './Components/ExpenseItem';
import NewExpense from './Components/NewExpense';
// import Chart from './Components/Chart/Chart';
import ExpenseChart from './Components/ExpenseChart';
import { useState } from 'react';
export default function App() {
  let o;
  if(localStorage.getItem("expense")===null){
    o=[]
  }
  else{
    o=JSON.parse(localStorage.getItem("expense"))
  }
  const [init,setInit]=useState(o)
  const addExpense=(o)=>{
    let t=[...o,...init]
    setInit(t);
    localStorage.setItem("expense",JSON.stringify(t))
    // console.log(init)
    // console.log(o)
    
  }
  const [year,setYear]=useState("2019")
const yearHandler=(val)=>{
  setYear(val)
  console.log(val)
}
console.log(init)
let filterYear=init.filter(ele=>new Date(ele.date).getFullYear()===Number.parseInt(year))
// console.log(filterYear)
let msg=<p style={{color:"white"}}>No expenses to display</p>
if(filterYear.length>0){
  msg= filterYear.map((m)=>{
    return <ExpenseItem key={m.id} {...m}></ExpenseItem>
  })
}
  return (
    <>
    <div className="new-expense">
     <NewExpense addExpense={addExpense}/>
     </div>
    <Card className="App">
    <div className='expenses'>
      <ExpensesFilter onSelect={year} onYearSelect={yearHandler}/>
      <ExpenseChart filter={filterYear} />
      </div>
      {
        msg
      }
        
    </Card>
     </>
  );
}

