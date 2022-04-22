import React, {useEffect, useRef, useState} from 'react';
import styles from './AddButton.module.scss'
import {handlerIncrement,handlerDecrement,handlerUp} from './../../../utilites/helpers/counterFunction'
// @ts-ignore
import AutosizeInput from 'react-input-autosize';
import MinusIcon from "../../icons/MinusIcon";
import PlusIcon from "../../icons/PlusIcon";
import {useDispatch, useSelector} from "react-redux";
import {cardProps, CatalogCardsProps} from "../../../Types/Types.props";
// @ts-ignore
import {deleteItemFromCart, updateCount} from "../../../redux/cart/reducer";
const AddButton = ({card}:cardProps) => {
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);
    let cardData = items.find((elem:any) => elem.article === card.article)
    const [value,setValue] = useState(cardData.count);
    const dispatch = useDispatch();
    const handleIncrease = () => {
        // setValue((prevState:any) => prevState+1)

        dispatch(updateCount({...card,count:value}))
        setValue(cardData.count+1)
    }
    const timer = useRef();
    const handleDecrease = () => {

            // setValue((prevState:any) => prevState-1)
        dispatch(updateCount({...card,count:value}))
        setValue(cardData.count-1)
    }
    useEffect(() =>{
        dispatch(updateCount({...card,count:value}))

    },[value])

    useEffect(() =>{

        if (value < 1 || value === 0 ){
            dispatch(deleteItemFromCart(card.article))
        }
    },[value])
    return (
        <div className={styles.flex}>
            <div className={styles.content}>
                <div className={styles.minus}
                     onPointerDown={() => handlerDecrement(timer,setValue,value)}
                     onPointerUp={() => handlerUp(timer)}
                     onPointerLeave={() => handlerUp(timer)}
                     onClick={()=> {handleDecrease();
                }}><MinusIcon /></div>
               <div className={styles.input}>
                   <AutosizeInput
                       onChange={(e:any) => setValue(e.target.value)}
                       value={cardData.count}
                       inputStyle={{
                           minHeight:"100%",
                           display:'flex',
                           justifyContent:'center',
                           alignItems:'center',
                           border: 'none',
                           outline: 'none',
                           textAlign: 'center',
                           opacity: '0.64',
                           paddingLeft: '4px',
                           paddingRight: '4px',
                           fontSize: '18px',
                           lineHeight: '23px',
                           backgroundColor: 'transparent'
                       }}
                   />
               </div>

                <div className={styles.plus}
                     onPointerDown={() => handlerIncrement(timer,setValue,value)}
                     onPointerUp={() => handlerUp(timer)}
                     onPointerLeave={() => handlerUp(timer)}
                     onClick={() => {handleIncrease();}} >
                    <PlusIcon/></div>
            </div>

        </div>
    );
};

export default AddButton;