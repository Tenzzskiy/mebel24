import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import useWindowSize from "../../../hooks/useWindowSize";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import styles from './orderModal.module.scss'
import Link from 'next/link';
import {FormInput} from "../../../hooks/FormInput";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {sendEmail} from "../../../utilites/helpers/helpers";
import axios from "axios";

interface Props {
    setOrderModal:any,
    totalPrice?:any,
    time?:any,
}

const OrderModal = ({totalPrice,setOrderModal,time}:Props) => {
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    const modal_f = useRef(null);
    const size= useWindowSize();
    useOnClickOutside(modal_f,() => size.width > 720 ? setOrderModal(false) : null)
    const [phone,setPhone] = useState({phone:''});
    const [input,setNumber ] = useState(false)
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false);
    const setInput = (id:number) =>{
        if (id === 1 ) {
            setNumber(false);
            setError(true);
        } else {
            setNumber(true);
            setError(false);
        }
    }
    const sendOrder = async () => {
        setSuccess(true)

        const res: any = await axios.post('/api/', {phone, totalPrice, items, time});
        const {success} = res.data;
        console.log(success)
        const timerID = setTimeout(() =>{
            setOrderModal(false)
            clearTimeout(timerID);
        },1500)

    }
    return (
        <>
            {success ?
                <div className={styles.modal}>
                    <div className={styles.content} ref={modal_f}>
                        <div className={styles.order}>
                            <div className={styles.header}>
                                <span className={styles.title}>Спасибо за заявку!</span>
                                <span className={styles.desc}>Наш менеджер свяжется с вами в ближайшее время</span>
                                <button className={styles.button2}>Жду звонка!</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className={styles.modal}>
                    <div className={styles.content} ref={modal_f}>
                        <div className={styles.order}>
                            <div className={styles.header}>
                                <span className={styles.title}>Оформление заказа</span>
                                <span className={styles.desc}>Оставьте ваш номер, наш менеджер свяжется с вами в ближайшее время и проконсультирует вас по любому вопросу</span>
                            </div>

                            <div className={styles.buttons}>
                                <FormInput className={classNames(input && phone.phone !== '' ? null : styles.border,styles.input)} placeholder='+7 999 999-99-99' value={phone.phone}  mask
                                           onChange={(evt) => {
                                               {
                                                   (evt?.includes('_')) && (evt?.includes(' ')) ?  setInput(1): null ;
                                               }
                                               {
                                                   (!(evt?.includes('_')) && (evt?.includes(' '))) ?  setInput(0) : null ;
                                               }
                                               setPhone({...phone, phone:evt})

                                           }}
                                />
                                <button className={classNames(!input ? styles.disable : null,styles.button)}
                                onClick={() => input ? sendOrder() : null}
                                >
                                    Оформить заказ
                                </button>
                            </div>
                            <span className={styles.button_desc}>Оформляя заказ вы соглашаетесь <br/>с
                    <Link href="/privacy"><a>
                        политикой конфидициальности
                    </a></Link>
                    </span>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default OrderModal;