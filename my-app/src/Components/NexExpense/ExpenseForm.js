import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enterdTitle, setEnteredTitle] = useState('');
  const [enterdAmount, setEnteredAmount] = useState('');
  const [enterdDate, setEnteredDate] = useState('');

  const titleChangeHandler = (eo) => {
    setEnteredTitle(eo.target.value);
  };

  const amountChangeHandler = (eo) => {
    setEnteredAmount(eo.target.value);
  };

  const dateChangeHandler = (eo) => {
    setEnteredDate(eo.target.value);
  };

  const submitHandler = (eo) => {
    eo.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate),
    };

    //lifting the state up
    props.onSaveExpenseData(expenseData);
    //--------------------

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enterdTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enterdAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enterdDate}
          />
        </div>
      </div>

      <div className="new-expense__actions ">
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expanse</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
