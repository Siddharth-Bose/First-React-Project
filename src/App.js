import { useState } from "react";
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NexExpense";

const DUMMY_EXPENSES = [{
  id: 'e1',
  title: ' Toilet Paper',
  amount: 95.49,
  date: new Date(2020, 7, 14),
},
{
  id: 'e2',
  title: 'Car Insurance',
  amount: 900,
  date: new Date(2021, 5, 28),
},
{
  id: 'e3',
  title: 'Grocery',
  amount: 500,
  date: new Date(2021, 1, 21),
},
{
  id: 'e4',
  title: 'Maid',
  amount: 200,
  date: new Date(2022, 10, 8),
},
];

const App=()=> {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses=> {
      return [expense, ...prevExpenses];
    });
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
