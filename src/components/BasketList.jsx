import { useContext } from 'react';
import { MainContext } from '../store/reducer';
import BasketItem from './BasketItem';

const BasketList = () => {
  const { state, dispatch } = useContext(MainContext);
  const { orders } = state;

  const totalPrice = orders.reduce((sum, order) => {
    return sum + order.price * order.quantity;
  }, 0);
  return (
    <ul className="collection">
      <li className="collection-item active">Корзина</li>
      {orders.length ? (
        orders.map(order => (
          <BasketItem key={order.id} dispatch={dispatch} {...order} />
        ))
      ) : (
        <li className="collection-item">Корзина пустая</li>
      )}
      <li className="collection-item">Общая стоимомсть: {totalPrice}</li>
    </ul>
  );
};

export default BasketList;
