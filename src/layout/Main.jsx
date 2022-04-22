import { useContext, useEffect } from 'react';
import Alert from '../components/Alert';
import Cart from '../components/Cart';
import GoodsList from '../components/GoodsList';
import Preloader from '../components/Preloader';
import { API_KEY, API_URL } from '../config';
import { FETCH_GOODS } from '../store/action';
import { MainContext } from '../store/reducer';

const Main = () => {
  const { state, dispatch } = useContext(MainContext);

  const { loading, goods, showAlert } = state;

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then(response => response.json())
      .then(data => dispatch({ type: FETCH_GOODS, payload: data.shop }));
  }, [dispatch]);

  return (
    <main className="content container">
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
      <Cart />
      {showAlert && <Alert />}
    </main>
  );
};

export default Main;
