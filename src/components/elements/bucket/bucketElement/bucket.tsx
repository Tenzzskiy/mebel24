import React, {useRef, useState} from 'react';
import styles from './bucket.module.scss'
import BucketHeader from "../bucketHeader";
import BucketModal from "../bucketModal";
import BucketCard from "../../../cards/bucketCard";
import ActionSection from "../../../sections/ActionSection/ActionSection";
import catalog from "../../../../data/catalog.json";
import BucketRight from "../bucketRight";
import {useSelector} from "react-redux";
import {cardProps, CatalogCardsProps} from "../../../../Types/Types.props";
import Portal from "../../../../hooks/Portal/Portal";
import OverlayingPopup from "../../../../hooks/OverlayingPopup/OverlayingPopup";
import Menu from "../../Menu";
import classNames from "classnames";
import Calendar from "react-calendar";
import useWindowSize from "../../../../hooks/useWindowSize";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import {AnimatePresence, motion } from 'framer-motion';
const BucketElement = () => {
    const [date1,setDate1] = useState();
    const [calendar1,setCalendar1] = useState(false);
    const [duration,setDuration] = useState( [new Date().getDate() ,new Date().getDate() ]);
    const [date2,setDate2] = useState();
    let date = new Date();
    const [value, onChange] = useState(new Date(date.setDate(date.getDate() +1)));
    // @ts-ignore
    const items = useSelector(state => state.cart.itemsInCart);

    const cards = items.map((elem:CatalogCardsProps,index:number) => <BucketCard
        // @ts-ignore
        value={value}
        // @ts-ignore
        duration={duration} setDuration={setDuration}
        key={index} card={elem}/>)
    const [calendar,setCalendar] = useState(false)
    const size = useWindowSize();
    const calendar_f = useRef(null);
    useOnClickOutside(calendar_f,() => size.width > 720 ? setCalendar1(false) : null)

    return (

      <>
          <div className={styles.content}>
              <AnimatePresence>
              {calendar && <Portal>
                  <OverlayingPopup isOpened={calendar} onClose={() => {
                      setCalendar(prev => !prev);
                  }
                  }>
                      <motion.div
                          className={classNames(styles.modaal_calendar, calendar ? styles.calendar_active : null)}
                           ref={calendar_f}>
                          <Calendar selectRange={true} minDate={new Date(date.setDate(date.getDate()))} onChange={onChange}
                                    value={value}/>
                      </motion.div>
                  </OverlayingPopup>
              </Portal>}
                  </AnimatePresence>
              <div className={styles.bucketHeader}>
                  <BucketHeader />

              </div>
              <div className={styles.flex}>
              <div className={styles.leftSide}>
                  {cards}
              </div>
                  <div className={styles.rightSide}>
                      <BucketRight
                          calendar1={calendar1}
                          setCalendar1={setCalendar1}
                          // @ts-ignore
                          date1={date1}
                          date2={date2}
                          setDate1={setDate2}
                          setDate2={setDate2}
                          cards={items}
                          value={value}
                          // @ts-ignore
                          duration={duration}   onChange={onChange} date={date}/>

                  </div>
              </div>



          </div>
              <BucketModal
                  setCalendar={setCalendar}
                  calendar1={calendar1}
                  setCalendar1={setCalendar1}
                  // @ts-ignore
                  date1={date1}
                  date2={date2}
                  setDate1={setDate2}
                  setDate2={setDate2}
                  cards={items}
                  value={value}
                  // @ts-ignore
                  duration={duration}   onChange={onChange} date={date}
              />



      </>
    );
};

export default BucketElement;