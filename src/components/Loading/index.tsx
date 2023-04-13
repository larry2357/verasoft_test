import React, { FC } from "react";

import "./styles.scss";

const Loading: FC = () => {
    return (
        <div className="loading">
            <div className="dot"></div>
        </div>
    )
}

export default Loading;