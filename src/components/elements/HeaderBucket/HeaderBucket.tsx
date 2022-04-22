import React, {useEffect, useState} from 'react';
import styles from "./HeaderBucket.module.scss";
import GoldenBucket from "../../icons/GoldenBucket";
import Link from 'next/link';
import {useSelector} from "react-redux";
import {CatalogCardsProps} from "../../../Types/Types.props";
import classNames from "classnames";
import EmptyBucket from "../../icons/EmptyBucket";
import ActiveBucket from "./active/activeBucket";
import DisabledBucket from "./disabled/DisabledBucket";

const HeaderBucket = () => {






    const [hover,setHover] = useState(false);

    return (
        <>
           <Link  href='/bucket'>
               <a  className={styles.a} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover( false)}>
                       <ActiveBucket  hover={hover} />
               </a>
           </Link>
        </>
    );
};

export default HeaderBucket;