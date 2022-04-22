import React, { useState} from 'react';
import FavouritesSection from "../components/sections/FavouritesSection";
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

const Favourites = ({FooterCards,MenuCards}:any) => {
    const [menu,setMenu] = useState(false);
    return (
        <>

            <div>
                <HeaderSection menu={menu} setMenu={setMenu} />
            <FavouritesSection
                MenuCards={MenuCards}
                menu={menu} setMenu={setMenu}
            />
                <FooterSection FooterCards={FooterCards}/>
            </div>
        </>
    );
};

export default Favourites;