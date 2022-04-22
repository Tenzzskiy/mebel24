import React from 'react';
import styles from "./DisabledBucket.module.scss";
import classNames from "classnames";
import {useSelector} from "react-redux";

const DisabledBucket = () => {
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);

    return (
        <>
            <div className={classNames(styles.empty)}>

                <span>Нет товаров</span>
            </div>
        </>
    );
};

export default DisabledBucket;