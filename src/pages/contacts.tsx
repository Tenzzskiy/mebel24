import React, { useState} from 'react';
import ContactsSection from "../components/sections/ContactsSection/Contacts";
import {getFooterCards, getMenuCards} from "../utilites/api/api";
import {parseFooter, parseMenuCards} from "../hooks/parsers/parser";
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

const Contacts = ({FooterCards,MenuCards}:any) => {
    const [menu,setMenu] = useState(false);
    return (
        <>

            <HeaderSection menu={menu} setMenu={setMenu} />
            <ContactsSection MenuCards={MenuCards} menu={menu} setMenu={setMenu}/>
            <FooterSection FooterCards={FooterCards}/>
        </>
    );
};

export default Contacts;