import "./Expenses.css";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const onExpenseYearSelected = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  return (
    <div>
      <ExpensesFilter
        onChangeSelectedYear={onExpenseYearSelected}
        selectedYear={selectedYear}
      />
      <Card className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
