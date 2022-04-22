import React from 'react';
import {SvgProps} from "../../assets/Types/SVG/svg.props";



const Plus = ({classname}:SvgProps) => {
    return (
        <svg className={classname} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="12" y1="23" x2="12" y2="1" stroke="#D9D7D4" strokeWidth="2" strokeLinecap="round"/>
            <line x1="23" y1="12" x2="1" y2="12" stroke="#D9D7D4" strokeWidth="2" strokeLinecap="round"/>
        </svg>

    );
};

export default Plus;