import React from 'react'
import Chart from './Chart/Chart'
function ExpenseChart(props) {
    let chart=[
        {label:"Jan",value:0},
        {label:"Feb",value:0},
        {label:"Mar",value:0},
        {label:"Apr",value:0},
        {label:"May",value:0},
        {label:"Jun",value:0},
        {label:"July",value:0},
        {label:"Aug",value:0},
        {label:"Sep",value:0},
        {label:"Oct",value:0},
        {label:"Nov",value:0},
        {label:"Dec",value:0},
    ]
    for(let fill of props.filter){
        let d=new Date(fill.date)
        let m=d.getMonth()
        chart[m].value+=fill.amount

    }
  return (
    <Chart datapoints={chart}/>
  )
}

export default ExpenseChart