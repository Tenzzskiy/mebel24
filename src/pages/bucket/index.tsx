import React, {useContext, useState} from 'react';
import BucketSection from "../../components/sections/BucketSection";
import {
    getBucketSliderCards, getFooterCards, getMenuCards,
} from "../../utilites/api/api";
import {
    parseFooter,
    parseMenuCards,
    parseSliderCards
} from "../../hooks/parsers/parser";
import {AloneArray} from "../../assets/Types/Types/Types.props";
import {AppWrapper} from "../../utilites/helpers/helpers";
import {MenuContext, SetMenuContext} from "../../context/context";
import HeaderSection from "../../components/sections/headerSection";
import FooterSection from "../../components/sections/FooterSection/FooterSection";


export async function getStaticProps(context:any) {
    const SliderCards = await getBucketSliderCards();
    const MenuCards = await getMenuCards() ;
    const FooterCards = await getFooterCards();
    // @ts-ignore
    return {
        props: {
            SliderCards:parseSliderCards(SliderCards.korzinas.data),
            MenuCards:parseMenuCards(MenuCards.kartochkaMenyus.data),
            FooterCards:parseFooter(FooterCards.futers.data),
        },

    }
}

const Bucket = ({FooterCards,MenuCards,SliderCards}:AloneArray) => {
    const [menu,setMenu] = useState(false);
    return (
        <>

            <AppWrapper SliderCards={SliderCards}  >
                <HeaderSection menu={menu} setMenu={setMenu} />
                <BucketSection MenuCards={MenuCards}  menu={menu} setMenu={setMenu}/>
                <FooterSection FooterCards={FooterCards}/>
            </AppWrapper>
        </>
    );
};

export default Bucket;