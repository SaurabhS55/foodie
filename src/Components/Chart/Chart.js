import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
function Chart(props) {
   let maxArr=props.datapoints.map(e=>{
    return e.value
   })
   let max=Math.max(...maxArr)
  return (
    <div className='chart'>
        {
            props.datapoints.map(e=>(
                <ChartBar key={e.label} max={max} label={e.label} value={e.value}/>
            ))
        }
    </div>
  )
}

export default Chart