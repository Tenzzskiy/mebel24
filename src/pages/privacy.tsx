import React, {useContext, useState} from 'react';
import styles from './../components/sections/privacy/privacy.module.scss'
import PrivacyComponent from "../components/sections/privacy/privacyComponent/privacyComponent";
import Feedback from "../components/sections/FeedbackSection/Feedback";
import {getFooterCards, getMenuCards} from "../utilites/api/api";
import {
    parseFooter,
    parseMenuCards,
} from "../hooks/parsers/parser";
import HeaderSection from "../components/sections/headerSection";
import FooterSection from "../components/sections/FooterSection/FooterSection";

export async function getStaticProps() {
    const MenuCards = await getMenuCards() ;
    const FooterCards = await getFooterCards();
    return {
        props: {
            MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
            FooterCards:parseFooter(FooterCards.futers.data),
        },
    }
}

const Privacy = ({FooterCards,MenuCards}:any) => {
    const [menu,setMenu] = useState(false);
    return (
        <>

            <HeaderSection menu={menu} setMenu={setMenu} />
            <div className={styles.privacy}>

                <div className={styles.content}>

                    <PrivacyComponent
                        //@ts-ignore
                        menu={menu} setMenu={setMenu} MenuCards={MenuCards} />
                </div>
                <Feedback/>
            </div>
            <FooterSection FooterCards={FooterCards} />
        </>
    );
};

export default Privacy;