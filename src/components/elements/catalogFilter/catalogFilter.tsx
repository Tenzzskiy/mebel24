import React, {useEffect, useState} from 'react';
import styles from './catalogFilter.module.scss'
import FilterArrow from "../../icons/FilterArrow";
import {LayoutGroup, motion} from "framer-motion";
const CatalogFilter = ({startArray,lowHighSort,array,setCurrentArray}:any) => {
    const variants = {
        hidden: {
            height: 38,

        },
        visible: {
            height: "auto",
            backgroundColor:'#373532',
            color:'white'
        },
        exit: {
            height: 38,
        },
    };
    const plus = {
        hidden: {
            transform: 'rotate(-180deg)'
        },
        visible: {
            transform: 'rotate(0deg)'
        },
        exit: {
            transform: 'rotate(-180deg)'
        },
    };
    const [active,setActive] = useState(false);
    const [value,setValue] = useState('По умолчанию')
    const itemAction = (text:string) =>{
        setActive(prevState => !prevState)
        setValue(text)
        switch (text){
            case 'По умолчанию':{
                setCurrentArray(startArray)
                break
            }

            case 'По возрастанию цены':{
                setCurrentArray((array:any) => [...array].sort((a,b) => Number(a.firstPrice) - Number(b.firstPrice)) )
                break
            }
            case 'По убыванию цены': {
                setCurrentArray((array:any) => [...array].sort((a,b) => Number(b.firstPrice) - Number(a.firstPrice)) )
                break
            }
            case 'По популярности':
        }
}

    return (
       <>
           <motion.div
               variants={variants}
               animate={active ? "visible" : "hidden"}
               transition={{ duration: 0.3, type: "tween" }}
               className={styles.filter}>
               <div className={styles.content}>
                   <div className={styles.item} onClick={() => setActive(prevState => !prevState)}> <span>{value}</span>

                       <motion.div
                           variants={plus}
                           animate={active ? "visible" : "hidden"}
                           transition={{ duration: 0.3, type: "tween" }}
                           className={styles.arrow}> <FilterArrow />
                       </motion.div>

                   </div>
                   <div className={styles.item} onClick={() => {
                       itemAction('По умолчанию')
                   }

                   }> <span>По умолчанию</span> </div>
                   <div className={styles.item} onClick={() => itemAction('По возрастанию цены')}> <span>По возрастанию цены</span> </div>
                   <div className={styles.item} onClick={() => itemAction('По убыванию цены')}> <span>По убыванию цены</span> </div>
                   <div className={styles.item} onClick={() => itemAction('По популярности')}> <span>По популярности</span> </div>
               </div>
           </motion.div>
       </>
    );
};

export default CatalogFilter;