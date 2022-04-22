import {
  MINUS_ORDER_COUNT,
  PLUS_ORDER_COUNT,
  REMOVE_ORDER,
} from '../store/action';

const BasketItem = ({ price, quantity, title, id, dispatch }) => {
  return (
    <li className="collection-item">
      <button
        className="btn"
        onClick={() => dispatch({ type: PLUS_ORDER_COUNT, payload: id })}
      >
        +
      </button>
      <button
        className="btn red"
        onClick={() => dispatch({ type: MINUS_ORDER_COUNT, payload: id })}
      >
        -
      </button>
      {title} x {quantity} = {price * quantity}
      <span
        className="secondary-content"
        onClick={() => {
          dispatch({ type: REMOVE_ORDER, payload: id });
        }}
      >
        <i className="material-icons">close</i>
      </span>
    </li>
  );
};

export default BasketItem;
