import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css"; //style componets


function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 28, 2);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
