import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from './Card';
import ExpensesFilter from "../ExpensesFilter";

function Expense(props) {
    const expenses = [{
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
    ]
    return (
    <Card className="expenses">
        <ExpensesFilter />
        <ExpenseItem title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
        ></ExpenseItem><ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date}
        ></ExpenseItem><ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
            date={expenses[2].date}
        ></ExpenseItem><ExpenseItem
            title={expenses[3].title}
            amount={expenses[3].amount}
            date={expenses[3].date}
        ></ExpenseItem></Card>
    );
}

export default Expense;