import React, {useEffect, useState} from 'react';
import style from "./activeBucket.module.scss";
import GoldenBucket from "../../../icons/GoldenBucket";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {CatalogCardsProps} from "../../../../Types/Types.props";
import DisabledBucket from "../disabled/DisabledBucket";
import EmptyBucket from "../../../icons/EmptyBucket";

const ActiveBucket = ({hover}:any) => {
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);


    const [positions,setPositions] = useState(0);


    useEffect(() =>{
        setPositions(items.length)

    },[items])
    let result = 0;
    items && items.length !== 0 ? items.map((elem:CatalogCardsProps) => result += Number(elem.price) * Number(elem.count) ) : 0 ;
   const activeBucket = () =>{
       if (hover){
           return(
               <div className={classNames(style.hover)}>
                   Открыть корзину
               </div>
           )
       } else {
           return(
               <div className={classNames(positions !== 0 ? null : style.background, style.item5)} >
                   <div className={classNames(positions !== 0 ? null : style.disable,style.bucket)}>
                       <GoldenBucket />
                       <div className={style.num}>
                           {positions === 0 ? '' : positions}
                       </div>
                   </div>
                   <div className={classNames(positions !== 0 ? null : style.disable,style.totalSum)}>
                       {result} ₽
                   </div>
                   <div className={classNames( positions === 0 ? null : style.disable,style.empty_bucket)}>
                   <EmptyBucket />
                   </div>
                   <div className={classNames( positions === 0 ? null : style.disable,style.empty)}>
                       Нет Товаров
                   </div>
               </div>
           )
       }
   }

    return (
        <>

            {activeBucket()}


        </>
    );
};

export default ActiveBucket;