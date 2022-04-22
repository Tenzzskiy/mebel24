import React from 'react';
import styles from './bucketHeader.module.scss'
import Clear from "../../../icons/Clear";
import {useDispatch, useSelector} from "react-redux";
import {CatalogCardsProps} from "../../../../Types/Types.props";
import {clean} from "../../../../redux/cart/reducer";
const BucketHeader = () => {
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    let positions = 0;
    items && items.length !== 0 ? items.map((elem:CatalogCardsProps) => positions += Number(elem.count) ) : 0 ;
    const dispatch = useDispatch();
    const handleClear = () =>{
        dispatch(clean())
    }
    return (
        <div className={styles.header}>
            <div className={styles.title}>
            Корзина
            </div>
            <div className={styles.flex}>
            <div className={styles.positions}>
                <span> Позиций </span>
                <div>{items.length} </div>
            </div>
            <div className={styles.items}>
                <span>Товаров </span>
                <div>{positions} </div>
            </div>
            <div className={styles.clear} onClick={() => {
                handleClear();
            }}>
                <div><Clear /></div>
                <span>Очистить корзину </span>
            </div>
            </div>
        </div>
    );
};

export default BucketHeader;