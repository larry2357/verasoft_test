import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import orderSaga from "../containers/Order/saga";
import profileSaga from "../containers/Profile/saga";
import UIReducer from "../app/uiSlice";
import orderReducer from "../containers/Order/orderSlice";
import profileReducer from "../containers/Profile/profileSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    ui: UIReducer,
    order: orderReducer,
    profile: profileReducer,
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});

sagaMiddleware.run(orderSaga);
sagaMiddleware.run(profileSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
