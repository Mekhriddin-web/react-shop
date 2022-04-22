import { useContext, useEffect } from 'react';
import { CLOSE_ALERT } from '../store/action';
import { MainContext } from '../store/reducer';

const Alert = () => {
  const { state, dispatch } = useContext(MainContext);

  const { showAlert } = state;

  useEffect(() => {
    const timerId = setTimeout(() => dispatch({ type: CLOSE_ALERT }), 1000);

    return () => clearTimeout(timerId);
  }, [showAlert, dispatch]);

  return (
    <div id="toast-container">
      <div className="toast">{showAlert} добввлен в корзину</div>
    </div>
  );
};

export default Alert;
