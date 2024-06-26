import './ExpenseDate.css'
export default function ExpenseDate(props){
    let month=props.date.getMonth()
    let day=props.date.getDate()
    let year=props.date.getFullYear()
    return (
        <div className="date-bg">
            <div>{day}</div>
            <div>{year}</div>
            <div>{month+1}</div>
        </div>
    )
}