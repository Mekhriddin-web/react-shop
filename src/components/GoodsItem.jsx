import { useContext } from 'react';
import { ADD_ORDER } from '../store/action';
import { MainContext } from '../store/reducer';

const GoodsItem = ({ poster, title, description, price, id }) => {
  const { dispatch } = useContext(MainContext);
  return (
    <div className="card">
      <div className="card-image">
        <img src={poster} alt={title} />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn btn-primary"
          onClick={() =>
            dispatch({
              type: ADD_ORDER,
              payload: { id, title, price, quantity: 1 },
            })
          }
        >
          Купить
        </button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
};

export default GoodsItem;
