import { call, put, takeLatest } from "redux-saga/effects";
import { Action } from '@reduxjs/toolkit';
import axios from "axios";
import { getOrders, getOrdersSuccess, getOrdersFail } from "./orderSlice";

export const requestGetOrders = () => {
    return axios.request({
        method: "get",
        url: "/data/orders.json"
    });    
}

export function* handleGetOrders(action: Action) {
     try {
        const { data } = yield call(requestGetOrders);
        yield put(getOrdersSuccess(data));
    } catch (error) {
        yield put(getOrdersFail(error));
    }
}

export default function* () {
    yield takeLatest(getOrders.type, handleGetOrders);
  }
  
