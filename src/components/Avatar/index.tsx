import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";

import "./styles.scss";

interface AvatarProps {
    url: string,
    title: string,
    isLoading: boolean,
}

const Avatar: FC<AvatarProps> = ({url, title, isLoading}) => {
    if(isLoading) {
        return (
            <div className="avatar">
                <div className="avatar__skeleton">
                    <Skeleton circle={true} width={72} height={72} />
                </div>
                <span className="avatar__title"><Skeleton height={20} /></span>
            </div>
        )
    }

    return (
        <div className="avatar">
            <FontAwesomeIcon icon={faUser} className="avatar__img"/>
            <span className="avatar__title">{title}</span>
        </div>
    )
}

export default Avatar;