import React, {useEffect, useRef, useState} from 'react';
import styles from './bucketRight.module.scss'
import {useSelector} from "react-redux";
import {CatalogCardsProps} from "../../../../Types/Types.props";
import Plus from "../../../icons/Plus";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import useWindowSize from "../../../../hooks/useWindowSize";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classNames from "classnames";
import {convertToNumberWithSpaces} from "../../../../utilites/helpers/helpers";
import Portal from "../../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../Menu";
import {AnimatePresence} from "framer-motion";
import OrderModal from "../../orderModal";
import DeliveryIcon from "../../../icons/DeliveryIcon";
const BucketRight = ({
                         calendar1,
                         setCalendar1,
                           date,
                         setDate1,
                         setDate2,
                         onChange,
                          value
                     }:any) => {
    const time = (Array.isArray(value) ? Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24)) : 1);
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    let positions = 0;
    items && items.length !== 0 ? items.map((elem:CatalogCardsProps) => positions += Number(elem.count) ) : 0 ;
    const calendar_f = useRef(null);

    const renderPrice = () => {
        let result = 0;
        items && items.length !== 0 ? items.map((elem:CatalogCardsProps) => result += (
            time !== 1 ? Number(elem.price) + (Number(elem.secondPrice) * Number(elem.count) * time) - Number(elem.secondPrice) : Number(elem.price) * Number(elem.count)
        ) ) : 0 ;
        return result;
    }

    const size = useWindowSize();
    useOnClickOutside(calendar_f,() => size.width > 720 ? setCalendar1(false) : null)
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
    const totalPercents = () =>{
        let num = 0;
        items && items.length !== 0 ? items.map((elem:CatalogCardsProps) => num += (
            time !== 1 ? (Number(elem.price) * Number(elem.count)) * time : Number(elem.price) * Number(elem.count)
        ) ) : 0 ;

        const percents = ((num - renderPrice()) / num) * 100 ;

        return percents;
    }
    const [orderModal,setOrderModal] = useState(false);
    return (
        <div className={styles.right}>
            <div className={styles.rightSide}>
                <div className={styles.content}>
                    <div className={styles.flex}>
                        <div className={styles.totalSum}>
                            <span>Сумма заказа</span>
                            <p>{convertToNumberWithSpaces(renderPrice())} <span className={styles.rub}>₽</span></p>
                            <div className={styles.economy}>
                                <span className={styles.economyText}> Вы экономите</span>
                                <div className={styles.percents_flex}>
                                    <span>{totalSale()}₽</span>
                                    <p className={styles.percents}>({items.length !== 0  ? totalPercents() !== 1 ? totalPercents().toFixed(2) : 0 : 0}%)</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div>
                                <span>Позиций <p> {items.length}</p></span>

                            </div>
                            <div>
                                <span>Товаров <p>{positions} </p></span>
                            </div>
                        </div>
                        <div className={styles.time}>
                <span className={styles.span}>
                    <input value={
                        Array.isArray(value) ?
                            Math.ceil(Math.abs(value[1].getTime() - value[0].getTime()) / (1000 * 3600 * 24)) + ' Дн' : 1 + ' Дн'
                    }
                           onChange={() => null}
                           className={classNames(styles.active_date,styles.second_date)}
                           onClick={() => setCalendar1(true)}
                    /></span>
                            <div className={classNames(styles.modaal_calendar, calendar1 ? styles.calendar_active : null)}
                                 ref={calendar_f}>
                                <Calendar selectRange={true} minDate={new Date(date.setDate(date.getDate()))} onChange={onChange}
                                          value={value}/>
                            </div>
                        </div>
                        <button className={classNames(items.length !== 0 ? null : styles.disable ,styles.button)}
                                onClick={(e) => items.length === 0 ? e.preventDefault() : setOrderModal(true)}
                        >Оформить заказ</button>
                    </div>

                    <AnimatePresence>
                        {orderModal && <Portal>
                            <OverlayingPopup isOpened={orderModal} onClose={() => {
                                // @ts-ignore
                                setMenu(prev => !prev);
                            }
                            }>
                                <OrderModal setOrderModal={setOrderModal}  />
                            </OverlayingPopup>
                        </Portal>}
                    </AnimatePresence>
                </div>

            </div>
            <div className={styles.delivery}>
               <div className={styles.deliveryContent}>
                   <DeliveryIcon />
                   <span>Стоимость доставки
                обсуждается с менеджером</span>
               </div>
            </div>
        </div>
    );
};

export default BucketRight;