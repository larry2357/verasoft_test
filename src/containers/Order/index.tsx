import React, { FC, useState, useEffect } from "react";
import clsx from "clsx";
import OrderList from "../../components/OrderList";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getOrders, OrderState, Orders } from "./orderSlice";
import "./styles.scss";

const tabs = [
    { id: 'orders_A', label: 'Orders A'},
    { id: 'orders_AA', label: 'Orders AA'},
    { id: 'orders_AAA', label: 'orders AAA'},
    { id: 'orders_B', label: 'orders_B'},
    { id: 'orders_C', label: 'orders_C'}
];
const flexes = [136, 402, 203, 168, 91];

const OrderContainer: FC = () => {
    const dispatch = useAppDispatch();
    const orders: OrderState= useAppSelector(state => state.order);
    const [tab, setTab] = useState<string>('orders_AAA');

    const getData = (): Orders => {
        if (tab === "orders_A") {
            return orders.orders_A as Orders;
        } else if (tab === "orders_AA") {
            return orders.orders_AA as Orders;
        } else if (tab === "orders_AAA") {
            return orders.orders_AAA as Orders;
        } else if (tab === "orders_B") {
            return orders.orders_B as Orders;
        }
        return orders.orders_C as Orders;
    }

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <div className="orderContainer">
            <div className="orderContainer__header">
                <div className="orderContainer__headerTabs">
                    {tabs.map(t => (
                        <a
                            key={t.id}
                            className={clsx("orderContainer__headerTab", t.id === tab && "orderContainer__headerTab--active")}
                            onClick={() => setTab(t.id)}
                        >{t.label}</a>
                    ))}
                </div>
            </div>
            <OrderList data={getData()} flexes={flexes} />
        </div>
    )
}

export default OrderContainer;