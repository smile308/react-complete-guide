import "./ExpensePrice.css";

function ExpensePrice(props) {
  return <div className="expenses-price">${props.amount}</div>;
}

export default ExpensePrice;
