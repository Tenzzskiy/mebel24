import Link from 'next/link';
import React, {useContext, useState} from 'react';
import styles from './FilterButton.module.scss'
import {CatalogFiltersContext, PropsCardsContext} from "../../../context/context";
import {element} from "prop-types";

import {useRouter} from "next/router";
import classNames from "classnames";

interface Props {
    title:string;
    id:string | number;
    link?:string;
    pageUrl?:string;
    category?:boolean;
}

const FilterButton = ({category=true,title,id,link,pageUrl}:Props) => {
    const router = useRouter()
    const page:any = useContext(PropsCardsContext)
    const filterData:any = useContext(CatalogFiltersContext);
    const filters:any[] = filterData.filter((elem:any) => elem.url === page.url)
    const urls = filterData.map((element:any) => element.link)
    const handleActive = () =>{
        if (router.asPath === `/catalog/podkatalog/${urls[id]}` || router.asPath === `/catalog/podkatalog/${filters[0].link[id]}`
        ){
            return true
        } else {

            return false
        }
            }

    return (
        <>
            {category ?  <Link href={typeof link === 'undefined' && id === '100' ? `/catalog/${typeof filters[0].categoryPage !== 'undefined' ? filters[0].categoryPage
                : filters[0].url }`
                : `/catalog/podkatalog/${Array.isArray(filters[0].link) ? filters[0].link[id]
                    : urls[id]}`}><a  onClick={
                    id === '100' && typeof filters[0].categoryPage === 'undefined' ? (e) => e.preventDefault() : () => {

                    }}>
                    <div className={classNames(handleActive() ? styles.active : null,styles.button,typeof filters[0].categoryPage === 'undefined' && id === '100' ? styles.active : null
                    )}>
                        <div >
                            {title}
                        </div>
                    </div>
                </a></Link>

                    :
                <Link href={`/catalog/${link}`}><a >
                    <div className={classNames(styles.button,id === '100' ? styles.active : null)}>
                        <div >
                            {title}
                        </div>
                    </div>
                </a></Link>}
        </>
    );
};

export default FilterButton;