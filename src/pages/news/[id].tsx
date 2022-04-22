import React, {useContext, useState} from 'react';
import {AloneArray} from "../../assets/Types/Types/Types.props";
import {getFooterCards, getMenuCards, getNews, getNewsPages} from "../../utilites/api/api";
import {parseFooter, parseMenuCards, parseNews, parseNewsPages} from "../../hooks/parsers/parser";
import styles from './index.module.scss'
import { LOCALHOST} from "../../graphql/consstants";
import NewsArrowCard from "../../components/cards/NewsArrowCard/NewsArrowCard";
import HeaderSection from "../../components/sections/headerSection";
import FooterSection from "../../components/sections/FooterSection/FooterSection";


export async function getStaticPaths() {
    const data =await getNewsPages();

    const paths = parseNewsPages(data.novostis.data).map((elem:any) => ({ params: { id:elem.url } }))

    return {
        paths,
        fallback: false
    };
}
export async function getStaticProps(context:any) {
    const data =await getNews();
    const MenuCards = await getMenuCards() ;
    const FooterCards = await getFooterCards();
    const props = parseNews(data.novostis.data).find((elem:any) => elem.url === context.params.id)
    return {
        props: {props,
            MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
            FooterCards:parseFooter(FooterCards.futers.data),
        },
    }
}

const Category_index = ({FooterCards,props,MenuCards}:AloneArray) => {
    const [menu,setMenu] = useState(false);
    const items = props.imgArray.map((elem:string,index:number) =>  { return(<div className={styles.pictures} key={index}><img src={LOCALHOST + elem} alt=""/></div>)
    })
    return (
        <>

            <HeaderSection menu={menu} setMenu={setMenu} />
            <div className={styles.newsPage}>

                <div className={styles.content2}>

                    <div className={styles.header}>
                        <h2>
                            {props.title}
                        </h2>
                        <span>{props.date}</span>
                    </div>
                    <div className={styles.pos}>
                        <div className={styles.image}><img src={LOCALHOST + props.img} alt=""/></div>
                        <div className={styles.desc}>
                            <h2>
                                {props.title}
                            </h2>
                            <div className={styles.flex}>
                                <span className={styles.date}>{props.date}</span>
                                <span className={styles.titleDesc}>Описание</span>
                                <span className={styles.description}>{props.description}</span>
                            </div>

                            <span className={styles.release}>Что было на мероприятии</span>
                            <div className={styles.images}>{items}</div>
                            <div className={styles.arrows}>
                                <div className={styles.leftArrow}> <NewsArrowCard MenuCards={MenuCards} menu={menu} setMenu={setMenu} prevTitle={props.prevTitle} prevLink={props.prevLink} nextLink={props.nextLink} nextTitle={props.nextTitle} position='left'/></div>
                            </div>
                        </div>
                        <div className={styles.imagesFlex}>
                            <div className={styles.images2}>{items}</div>
                        </div>
                    </div>
                    <div className={styles.arrows2}>
                        <NewsArrowCard MenuCards={MenuCards} menu={menu} setMenu={setMenu} prevImg={props.prevImg} nextImg={props.nextImg} prevTitle={props.prevTitle} prevLink={props.prevLink} nextLink={props.nextLink} nextTitle={props.nextTitle} position='right'/>
                        <NewsArrowCard MenuCards={MenuCards} menu={menu} setMenu={setMenu} prevImg={props.prevImg} nextImg={props.nextImg} prevTitle={props.prevTitle} prevLink={props.prevLink} nextLink={props.nextLink} nextTitle={props.nextTitle} position='left'/>

                    </div>

                </div>
            </div>
            <FooterSection FooterCards={FooterCards}/>
        </>
    );
};


    export default Category_index;