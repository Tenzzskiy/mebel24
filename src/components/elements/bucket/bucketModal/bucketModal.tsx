import React, {useEffect, useRef} from 'react';
import styles from './bucketModal.module.scss'
import ResultButton from "../../resultButton/resultButton";
import {useSelector} from "react-redux";
import {CatalogCardsProps} from "../../../../Types/Types.props";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import useWindowSize from "../../../../hooks/useWindowSize";
import {convertToNumberWithSpaces} from "../../../../utilites/helpers/helpers";
import classNames from "classnames";
import Calendar from "react-calendar";
const BucketModal = ({
                         setCalendar,
                         calendar1,
                         setCalendar1,
                         date,
                         setDate1,
                         setDate2,
                         onChange,
                         value
                     }:any) => {
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    const time = (Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24)) : 1);


    const renderPrice = () => {
        let result = 0;
        items && items.length !== 0 ? items.map((elem:CatalogCardsProps) => result += (
            time !== 1 ? Number(elem.price) + (Number(elem.secondPrice) * Number(elem.count) * time) - Number(elem.secondPrice) : Number(elem.price) * Number(elem.count)
        ) ) : 0 ;
        return result;
    }

    useEffect(() =>{
        // @ts-ignore
        if ( !(Array.isArray(value)) ) {
            // @ts-ignore
            setDate2(`${value.getDate()}.${value.getMonth()}.${value.getFullYear()} `);
            // @ts-ignore
            setDate1(`${value.getDate()}.${value.getMonth()}.${value.getFullYear()} `);
        } else {
            if (value.length < 2) {
                // @ts-ignore
                setDate1(`${value[0].getDate()}.${value[0].getMonth()}.${value[0].getFullYear()} `);
                // @ts-ignore
                setDate1(`${value[0].getDate()}.${value[0].getMonth()}.${value[0].getFullYear()} `);
            }else
            {
                // @ts-ignore
                setDate1(`${value[0].getDate()}.${value[0].getMonth()}.${value[0].getFullYear()} `);

                // @ts-ignore
                setDate2(`${value[1].getDate()}.${value[1].getMonth()}.${value[1].getFullYear()} `);
            }
        }
        // @ts-ignore


    },[value]);
    const totalSale =() =>{
        let num = 0;
        items && items.length !== 0 ? items.map((elem:CatalogCardsProps) => num += (
            time !== 1 ? (Number(elem.price) * Number(elem.count)) * time : Number(elem.price) * Number(elem.count)
        ) ) : 0 ;
        const Sales = num - renderPrice();

        return Sales;
    }

    return (
        <div className={styles.modal}>

            <ResultButton />
            <div className={styles.flex}>
                <div className={styles.leftSide}>
                <span>Сумма заказа</span>
                    <div>{convertToNumberWithSpaces(renderPrice())}<span>₽</span></div>
                    <p>Вы экономите {totalSale()} ₽ </p>
                </div>
                <div className={styles.rightSide}>
                    <span>Время аренды</span>
                    <div
                        onClick={() => setCalendar(true)}
                        className={styles.span}>
                    <input value={
                        Array.isArray(value) ?
                            Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24)) + ' Дн' : 1 + ' Дн'
                    }
                           className={classNames(styles.active_date,styles.second_date)}
                           onClick={() => setCalendar1(true)}
                    /></div>
                </div>
            </div>
        </div>
    );
};

export default BucketModal;