import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {

  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found No Data</h2>
  }

  return <ui className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
   ))}
  </ui>

}

export default ExpenseList;