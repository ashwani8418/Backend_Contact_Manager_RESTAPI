import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React from 'react';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.expense[0].date}
        title={props.expense[0].title}
        amount={props.expense[0].amount}
      />
      <ExpenseItem
        date={props.expense[1].date}
        title={props.expense[1].title}
        amount={props.expense[1].amount}
      />
      <ExpenseItem
        date={props.expense[2].date}
        title={props.expense[2].title}
        amount={props.expense[2].amount}
      />
      <ExpenseItem
        date={props.expense[3].date}
        title={props.expense[3].title}
        amount={props.expense[3].amount}
      />
      <ExpenseItem
        date={props.expense[4].date}
        title={props.expense[4].title}
        amount={props.expense[4].amount}
      />
    </Card>
  );
}

export default Expenses;
