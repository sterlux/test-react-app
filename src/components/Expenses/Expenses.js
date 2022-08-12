import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const renderExpenses = () => {
    return props.items.map((item) => {
      return (
        <ExpenseItem
          title={item.title}
          date={item.date}
          ammount={item.amount}
        />
      );
    });
  };

  return <Card className='expenses'>{renderExpenses()}</Card>;
};

export default Expenses;
