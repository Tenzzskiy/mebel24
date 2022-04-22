import React, {SVGProps} from 'react';
import {SvgProps} from "../../assets/Types/SVG/svg.props";


const BurgerIcon = ({classname}:SvgProps) => {
    return (
        <svg className={classname} width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="1.22217" x2="8.5" y2="1.22217" stroke="#7B7976" strokeLinecap="round"/>
            <line x1="0.5" y1="11" x2="8.5" y2="11" stroke="#7B7976" strokeLinecap="round"/>
            <line x1="0.5" y1="6.11133" x2="8.5" y2="6.11133" stroke="#7B7976" strokeLinecap="round"/>
        </svg>


    );
};

export default BurgerIcon;