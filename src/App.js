import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NexExpense";

function App() {
  const addExpenseHandler = expenses =>{
    console.log('App.js');
    console.log(expenses);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense />
    </div>
  );
}

export default App;
