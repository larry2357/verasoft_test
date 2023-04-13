import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";

import "./styles.scss";

interface ContactBoxProps {
    data: {
        icon: React.ReactNode,
        contact: string,
    }[],
    isLoading: boolean
}

const ContactBox: FC<ContactBoxProps> = ({ data, isLoading }) => {
    if(isLoading) {
        return (
            <div className="contactBox">
                <div className="contactBox__skeleton">
                    <Skeleton height={17} />
                    <Skeleton height={17} />
                    <Skeleton height={17} />
                    <Skeleton height={17} />
                    <Skeleton height={17} />
                </div>
            </div>
        )
    }
    return (
        <div className="contactBox">
            {
                data.map((item, index) => (
                    <div key={`contactItem-${index}`} className="contactBox__item">
                        <span className="contactBox__icon">{item.icon}</span>
                        <span className="contactBox__contact">{item.contact}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactBox;