import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expanseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterdExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={expanseFilterHandler} />
        <ExpensesChart expenses={filterdExpenses}/>
        <ExpensesList items={filterdExpenses}/>
      </Card>
    </div>
  );
}
export default Expenses;
