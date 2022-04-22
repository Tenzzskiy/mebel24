import React, {useContext, useEffect, useState} from 'react';
import styles from './Releases.module.scss'
import ReleasesCard from "../../cards/ReleasesCard/ReleasesCard";
import OpenButton from "../../elements/OpenButton/OpenButton";
import useWindowSize from "../../../hooks/useWindowSize";
import {NewsContext} from "../../../context/context";

export interface Props {
    title:string;
}



const Releases = ({title}:Props) => {
    const size = useWindowSize();
    const data = useContext(NewsContext)
    const [step,setStep] = useState(true);
    const [array,setArray] = useState<any>(data);
    const cards = (step ? array.slice(0,size.width > 1100 ? 6: size.width < 1100 && size.width > 720 ? 4 : 3) :  array).map((elem:any,index:number) => <ReleasesCard link={elem.url} key={index} title={elem.title} img={elem.img} date={elem.date} />)

    return (
       <>
           <div className={styles.releases}>
                <div className={styles.content}>
                <div className={styles.title}>
                    <h2>
                        {title}
                    </h2>
                </div>
                    <div className={styles.flex}>
                        {cards}
                    </div>
                    <OpenButton setArray={setArray} length={cards.length} setStep={setStep} title='Открыть все' />
                </div>
           </div>
       </>
    );
};

export default Releases;