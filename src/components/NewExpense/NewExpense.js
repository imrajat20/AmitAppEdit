import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const [Editing, setEditing] = useState(false);
  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  }


  return (
    <div className='new-expense'>
      {!Editing && <button onClick={startEditingHandler}>Add Expenses</button>}
      {Editing && (
      <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditingHandler}/>)}
    </div>
  );
};

export default NewExpense;
