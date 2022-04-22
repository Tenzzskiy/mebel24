import React from 'react';
import classNames from "classnames";
import styles from "../../cards/PreferenceCard/PreferenceCard.module.scss";
import ShowRoom from "../../icons/ShowRoom";
import SecondDay from "../../icons/SecondDay";
import SaleForEvents from "../../icons/SaleForEvents";
import FirstPlus from "../../icons/FirstPlus";
import SecondPlus from "../../icons/SecondPlus";
import ThirdPlus from "../../icons/ThirdPlus";
import LastPlus from "../../icons/lastPlus";

export interface Flag {
    id:number;
}

const Flag = ({id}:Flag) => {
    const setImg = () =>{
        switch (id) {
            case 1: return <ShowRoom />
            case 2: return <SecondDay />
            case 3: return <SaleForEvents />
            case 5: return <FirstPlus />
            case 6: return <SecondPlus />
            case 7: return <ThirdPlus />
            case 8: return <LastPlus />
        }
    }
    const setBackground = () =>{
        switch (id){
            case 1: return styles.background4
            case 2: return styles.background5
            case 3: return styles.background6
            case 5: return styles.background11
            case 6: return styles.background12
            case 7: return styles.background13
            case 8: return styles.background14
        }
    }
    return (
        <div className={classNames(setBackground(),styles.ribbon1)} >
            {setImg()}
        </div>
    );
};

export default Flag;