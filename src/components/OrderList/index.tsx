import React, { FC, useEffect, useState } from "react";
import clsx from "clsx";
import moment from "moment";
import Loading from "../Loading";
import { Orders, Order } from  "../../containers/Order/orderSlice";

import "./styles.scss";

interface OrderListProps {
    data: Orders,
    flexes: number[]
}

interface Sort {
    field: string;
    order: number;
}

const OrderList: FC<OrderListProps> = ({ data, flexes }) => {
    const [tab, setTab] = useState<string>("sent");
    const [isLoading, setIsLoading]=  useState<boolean>(false);
    const [sort, setSort] = useState<Sort>({ field: "", order: 1 });
    const sentOrders: Order[] = data.sent || [];
    const sortedOrders: Order[] = sentOrders.slice().sort((a, b) => {
        const { field, order } = sort;
        switch (field) {
            case "date":
                return (a.sent_dt + a.sent_tm) > (b.sent_dt + b.sent_tm) ? order : -order;
            case "subject":
                return a.subject.title > b.subject.title? order : -order;
            case "communication":
                return a.type > b.type ? order : -order;
            case "order":
                return a.order_id > b.order_id ? order : -order;
            default:
                return 0;
        }
    });

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [tab]);

    const sortTable = (field: string) => {
        if(sort.field !== field) {
            setSort({ field, order: 1 });
        } else {
            setSort({ field, order: -sort.order });
        };
    }

    return (
        <div className="orderList">
            <div className="orderList__toolbar">
                <div>
                    <button
                        className={clsx("orderList__tab", tab === "sent" && "orderList__tab--active")}
                        onClick={() => setTab("sent")}
                    >Sent</button>
                    <button
                        className={clsx("orderList__tab", tab === "errors" && "orderList__tab--active")}
                        onClick={() => setTab("errors")}
                    >Errors</button>
                </div>
                <h1 className="orderList__title">Recent Orders</h1>
                <div></div>
            </div>
            {isLoading ? (
                <div className="orderList__loading">
                    <Loading />
                </div>
            ) : (
                <>  
                    {tab === "errors" ? (
                        <div className="orderList__empty">
                            <h1>No Items</h1>
                        </div>
                    ) : (
                        <>
                        <div className="orderList__header">
                            <div className="orderList__headerCell" onClick={() => sortTable('date')} style={{flex: flexes[0]}}>
                                Date &amp; Time
                            </div>
                            <div className="orderList__headerCell" onClick={() => sortTable('subject')} style={{flex: flexes[1]}}>
                                Subject
                            </div>
                            <div className="orderList__headerCell" onClick={() => sortTable('communication')} style={{flex: flexes[2]}}>
                                Communication Type
                            </div>
                            <div className="orderList__headerCell" onClick={() => sortTable('order')} style={{flex: flexes[3]}}>
                                Order #
                            </div>
                            <div className="orderList__headerCell" style={{flex: flexes[4]}}>
                            </div>
                        </div>
                        {sortedOrders.map((order: Order) => (
                            <div key={order.id} className="orderList__row">
                                <div className="orderList__cell" style={{flex: flexes[0]}}>
                                    <span className="orderList__cell--big">{moment(new Date(order.sent_dt)).format("ddd, MMM DD")}</span>
                                    <span>{moment(new Date(`${order.sent_dt} ${order.sent_tm}`)).format("h:mm a")}</span>
                                </div>
                                <div className="orderList__cell" style={{flex: flexes[1]}}>
                                    <span className="orderList__cell--big">{order.subject.title}</span>
                                    <span>{order.subject.email}</span>
                                </div>
                                <div className="orderList__cell" style={{flex: flexes[2]}}>
                                    {order.type}
                                </div>
                                <div className="orderList__cell" style={{flex: flexes[3]}}>
                                    {order.order_id}
                                </div>
                                <div className="orderList__cell" style={{flex: flexes[4]}}>
                                    <a className="orderList__cell__btnResend">Resend</a>
                                </div>
                            </div>
                        ))}
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default OrderList;