import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props)
{
    return (
        <Card className='expenses'>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
            <br></br>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>
        </Card>
    
    );
}

export default Expenses;