import React, {useState} from 'react';
import styles from './AskCard.module.scss'
import Plus from "../../icons/Plus";
import classNames from "classnames";
import {LayoutGroup, motion} from "framer-motion";

export interface Props {
    title:string;
    description:string;
}
const AskCard = ({title,description}:Props) => {
    const [active,setAction] = useState(false);
    const variants = {
        hidden: {
            height: 50,
        },
        visible: {
            height: "auto",
        },
        exit: {
            height: 50,
        },
    };
    const plus = {
        hidden: {
            transform: 'rotate(90deg)'
        },
        visible: {
            transform: 'rotate(45deg)'
        },
        exit: {
            transform: 'rotate(90deg)'
        },
    };

    return (

            <motion.div
                variants={variants}
                animate={active ? "visible" : "hidden"}
                transition={{ duration: 0.3, type: "tween" }}
                className={ classNames(active ? styles.hover : null,styles.card)}>
                <div

                    className={classNames(styles.content)} onClick={() =>setAction(!active)}>
                    <div className={styles.flex}>
                        <div> {title}</div>

                        <motion.div
                            variants={plus}
                            animate={active ? "visible" : "hidden"}
                            transition={{ duration: 0.3, type: "tween" }}
                            className={styles.icon}>
                            <Plus />
                        </motion.div>
                    </div>
                    <div className={classNames( styles.text)}> {description}</div>

                </div>


            </motion.div>

    );
};

export default AskCard;