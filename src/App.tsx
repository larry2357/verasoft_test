import React, { useEffect } from 'react';
import './App.scss';
import { showModal } from './app/uiSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';

const OrderPage = React.lazy(() => import('./pages/Order'));
const Modal = React.lazy(() => import('./components/Modal'));

function App() {
  const isShowModal: boolean = useAppSelector(state => state.ui.open);

  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <OrderPage />
        {isShowModal && <Modal hideModal={() => dispatch(showModal(false))} />}
      </React.Suspense>
    </div>
  );
}

export default App;
