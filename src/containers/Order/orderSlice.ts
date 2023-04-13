import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Subject {
    title: string;
    email: string;
}

export interface Order {
    id: number;
    order_id: number;
    sent_dt: string;
    sent_tm: string;
    subject: Subject;
    type: string;
}

export interface Orders {
    sent?: Order[];
}

export interface OrderState {
    orders_A: Orders | [];
    orders_AA: Orders | [];
    orders_AAA: Orders | [];
    orders_B: Orders | [];
    orders_C: Orders | [];
}

const initialState: OrderState = {
    orders_A: [],
    orders_AA: [],
    orders_AAA: [],
    orders_B: [],
    orders_C: [],
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        getOrders: (state) => {},
        getOrdersSuccess: (state, action: PayloadAction<OrderState>) => {
            state.orders_A = action.payload.orders_A;
            state.orders_AA = action.payload.orders_AA;
            state.orders_AAA = action.payload.orders_AAA;
            state.orders_B = action.payload.orders_B;
            state.orders_C = action.payload.orders_C;
        },
        getOrdersFail: (state, action) => {
        },
    }
});

export const { getOrders, getOrdersSuccess, getOrdersFail } = orderSlice.actions;

export default orderSlice.reducer;