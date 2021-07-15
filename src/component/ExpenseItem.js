import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

function ExpenseItem(props)
{
    // const expenseDate = new Date(2021, 7, 28);
    // const expenseTitle = 'car insurance';
    // const expenseAmount = 296.32; 
   const clickHandler=() =>{
       console.log('Clicked!!!!!');
   };
    return(
        <Card className='expense-item'>
            <ExpenseDate date = {props.date} />
            <div className="expense-item-title">
                <h2>{props.title}</h2>
                <div className="expense-item-price">${props.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}
export default ExpenseItem;