import React from 'react';
import styles from './PreferenceAdditions.module.scss';
import PreferenceCard from "../../../cards/PreferenceCard";
import PreferenceSlider from "../PreferenceSlider/PreferenceSlider";
import {MyImage} from "../../../../hooks/MyImage";


const PreferenceAdditions = () => {
    let cards = [
        {id:1,title:'Шоурум и база в Москве',color:'#C0A767',description:'Наша база имеет площадь более 1000' +
                'м². Также ' +
                'у нас есть шоурум, в котором вы можете посмотреть всю нашу продукцию. Приeзжайте в гости:)'},
        {id:2,title:'Второй день дешевле',color:'#679A65',description:'Наша база имеет площадь более 1000' +
                'м². Также ' +
                'у нас есть шоурум, в котором вы можете посмотреть всю нашу продукцию. Приeзжайте в гости:)'},
        {id:3,title:'Скидки для ивент-агенств',color:'#717EAC',description:'Наша база имеет площадь более 1000' +
                'м². Также ' +
                'у нас есть шоурум, в котором вы можете посмотреть всю нашу продукцию. Приeзжайте в гости:)'}
    ]
    const items = cards.map((elem) => <PreferenceCard description={elem.description} key={elem.id} id={elem.id} title={elem.title} color={elem.color} />)
    return (
      <>
        <div className={styles.additions}>
            {items}
        </div>
          <div className={styles.additions2}>

            <PreferenceSlider array={cards}/>
        </div>

      </>
    );
};

export default PreferenceAdditions;
