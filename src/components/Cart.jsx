import { useContext } from 'react';
import { SHOW_BASKET } from '../store/action';
import { MainContext } from '../store/reducer';
import BasketList from './BasketList';

const Cart = () => {
  const { state, dispatch } = useContext(MainContext);
  const { orders, showBasket } = state;
  return (
    <div className="cart-container">
      <div
        className="cart blue darken-4 white-text"
        onClick={() => dispatch({ type: SHOW_BASKET })}
      >
        <i className="material-icons">add_shopping_cart</i>
        {orders.length ? (
          <span className="cart-quantity">{orders.length}</span>
        ) : null}
      </div>
      {showBasket ? <BasketList /> : null}
    </div>
  );
};

export default Cart;
