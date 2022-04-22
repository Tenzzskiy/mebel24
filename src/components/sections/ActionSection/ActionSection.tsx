import React from 'react';
import Slider from "../../elements/Slider/Slider";
import styles from './ActionSection.module.scss'
import {Props} from "./ActionSection.props";
import BucketSlider from "../../elements/bucket/bucketSlider/bucketSlider";

const ActionSection = ({catalog=false,catalogType,title,array,count}:Props) => {
    console.log(catalog)
    return (
        <>
            <div className={styles.action}>
        <div className={styles.content}>
            <h2>{title}</h2>

            {catalog ? <BucketSlider array={array} catalogType={catalogType} /> : <Slider count={count} catalog={catalog} catalogType={catalogType} array={array}  />}
        </div>
            </div>
        </>
    );
};

export default ActionSection;