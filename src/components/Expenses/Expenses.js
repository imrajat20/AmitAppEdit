import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredYearExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear;
  });


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredYearExpenses}></ExpensesChart>
        <ExpenseList items={filteredYearExpenses}></ExpenseList>
      </Card>
    </div>
  );
};

export default Expenses;
