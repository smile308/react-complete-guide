import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [add, setadd] = useState(false);

  const onCancelHandler = () => {
    setadd(false);
  };

  const onButtonHandler = () => {
    setadd(true);
  };

  return (
    <div className="new-expense">
      {!add && <button onClick={onButtonHandler}>Add New Expense</button>}
      {add && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onClick={onCancelHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
