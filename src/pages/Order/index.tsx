import React, { FC } from "react";
import OrderContainer from "../../containers/Order";
import ProfileContainer from "../../containers/Profile";

import "./styles.scss";

const OrderPage: FC = () => {
    return (
        <div className="orderPage">
            <ProfileContainer />
            <OrderContainer />
        </div>
    )
}

export default OrderPage;