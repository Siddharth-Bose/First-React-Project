import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from './Card';
import ExpensesFilter from "../ExpensesFilter";

function Expense(props) {
    
    const [filteredYear, setFilteredYear] = useState('2020');
    const expenseHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });
    let expensesContent=<p className="expenses__not-found">No Expenses Found!</p>
    if(filteredExpenses.length>0){
        expensesContent=filteredExpenses.map(expense => 
            <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} />)
    }
    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter selected={filteredYear} onExpenseFilter={expenseHandler} />
                {expensesContent }
            </div>
        </Card>
    );
}

export default Expense;