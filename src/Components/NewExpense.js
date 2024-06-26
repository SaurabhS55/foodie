import React, { useState } from 'react'
import './NewExpence.css'
function NewExpense(props) {
    const [titleVal,setTitleVal]=useState('')
    const [amountVal,setAmountVal]=useState('')
    const [dateVal,setDateVal]=useState('')
    const [add,setadder]=useState(false)
    const titleChangeHandler=(e)=>{
        setTitleVal(e.target.value)
    }
    const amountChangeHandler=(e)=>{
        setAmountVal(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        setDateVal(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        // const formval=
        
        // console.log(formval);
        // let arr;
        // if(localStorage.getItem("expense")===null){
        //     // arr=[]
        //     let te=[{
        //         name:titleVal,
        //         amount:amountVal,
        //         date:dateVal
        //     }]
        //     localStorage.setItem("expense",JSON.stringify(te))
        //     // props.addExpense(te)
        // }
        // else{
            // arr=JSON.parse(localStorage.getItem("expense"))
            let temp=[{
                id:Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
                name:titleVal,
                amount:amountVal,
                date:new Date(dateVal)
            }]
            console.log(temp);
            // localStorage.setItem("expense",JSON.stringify(temp))
            props.addExpense(temp)
        // }
        setAmountVal("")
        setDateVal("")
        setTitleVal("")
        setadder(false)
    
    }
    
    
    let setVisible=()=>{
        setadder(true)
    }
    // let setHidden=()=>{
    //     setadder(false)
    // }
    let display=(<div>
    <button type='submit' onClick={setVisible} style={{backgroundColor:"purple",borderRadius:"10px"}}>Add New Expense</button>
        </div>)
    if(add){
        display=(<form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <div className='new-expense__control'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={titleVal} placeholder="Name"  onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="name">Amount</label>
                    <input type="number" id="amount" name="amount" value={amountVal} placeholder="Amount" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="name">Date</label>
                    <input type="date" id="date" name="date" placeholder="Date" value={dateVal} min="2019-1-1" max="2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button></div>
        </form>)
    }
  return (
    <>
    {
        display
    }
    </>
  );
}

export default NewExpense;