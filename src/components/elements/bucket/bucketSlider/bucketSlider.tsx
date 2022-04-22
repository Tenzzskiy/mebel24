import React, {useState} from 'react';
import classNames from "classnames";
import styles from "../../Slider/Slider.module.scss";
import CatalogCard from "../../../cards/CatalogCard/CatalogCard";
import {useKeenSlider} from "keen-slider/react";

interface slider {
    array?:any[];
    catalogType?:boolean;
}
const BucketSlider = ({array,catalogType}:slider) => {

    const [slider1Ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView:'auto',

        },
        selector: ".first > .keen-slider__slide"
    });






    const catalogItems =


          array?.map((elem,index) =>

                <div key={index} className={classNames("keen-slider__slide data-keen-slider-clickable ", styles.slider_card2)}>
                    <CatalogCard
                        mainImgArray={elem.mainImgArray}
                        imgArrayCount={catalogType}
                                  mainImg={elem.mainImg}
                                  name={elem.name}
                                  data={elem.imgArray}
                                  title={elem.title}
                                  article={elem.article}
                                  price={Number(elem.firstPrice)}
                                  secondPrice={Number(elem.secondPrice)}
                                  count={elem.count}
                                />
                </div>)

    return (
       <div className={styles.wrapper}>
           <div ref={slider1Ref} className={classNames(styles.slider,"keen-slider first")}>

                  {catalogItems}
                  {catalogItems}
                  {catalogItems}
                  {catalogItems}
                  {catalogItems}
                  {catalogItems}
                  {catalogItems}
                  {catalogItems}



           </div>
       </div>
    );
};

export default BucketSlider;