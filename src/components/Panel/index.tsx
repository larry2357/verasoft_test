import React, { FC } from "react";
import clsx from "clsx";
import "./styles.scss";
import Skeleton from "react-loading-skeleton";

interface PanelProps {
    title: string,
    data: {
        value: string,
        label: string
    }[],
    theme: "green" | "grey",
    isLoading: boolean,
}

const Panel: FC<PanelProps> = ({title, data, theme, isLoading}) => {
    return (
        <div className={clsx("panel", `panel--${theme}`)}>
            <span className={clsx("panel__title", `panel--${theme}`)}>{title}</span>
            <div className="panel__items">
                {isLoading && <div className="panel__loading"><Skeleton height={92} /></div>}
                {
                    !isLoading && data.map((item, index) => (
                        <div key={`item-${index}`} className="panel__item">
                            <div className={clsx("panel__itemBody", `panel--${theme}`)}>
                                <div className="panel__itemData">
                                    <span>{item.value}</span>
                                </div>
                                <span className="panel__itemTitle">{item.label}</span>
                            </div>
                            {index !== (data.length - 1)  && <div className="panel__itemDivider"></div>}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Panel;