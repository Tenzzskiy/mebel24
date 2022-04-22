import React, {useState} from 'react';
import styles from './Asks.module.scss'
import AskCard from "../../cards/AskCard/AskCard";
import data from './../../../data/asks.json'
import classNames from "classnames";
import { motion} from "framer-motion";
const Asks = () => {
    const [step,setStep] = useState(true)
    const [asks,setAsks] = useState(data)
    const [disabled,setDisabled] = useState(false)
    const items = (step ? asks.slice(0,5) :  asks).map((elem) => <AskCard key={elem.id} title={elem.title} description={elem.description} />)


    return (
        <div className={styles.asks}>
          <motion.div

              className={styles.content}>
                <span className={styles.title}>
                Вопросы и ответы
            </span>
              {items}

          </motion.div>
            <div className={classNames(disabled ? styles.disabled : null,styles.button)} onClick={()=> {
                setStep(false);
                setDisabled(true);
            }}>
                Показать еще 5 вопросов
            </div>
        </div>
    );
};

export default Asks;