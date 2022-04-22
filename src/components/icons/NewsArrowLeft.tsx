import React from 'react';
import {SvgProps} from "../../assets/Types/SVG/svg.props";

const NewsArrowLeft = ({classname}:SvgProps) => {
    return (
        <>
            <svg className={classname} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="24" transform="rotate(-180 25 25)" stroke="#B7B4AE" strokeWidth="2"/>
                <path d="M34 26C34.5523 26 35 25.5523 35 25C35 24.4477 34.5523 24 34 24L34 26ZM14.2929 24.2929C13.9024 24.6834 13.9024 25.3166 14.2929 25.7071L20.6569 32.0711C21.0474 32.4616 21.6805 32.4616 22.0711 32.0711C22.4616 31.6805 22.4616 31.0474 22.0711 30.6569L16.4142 25L22.0711 19.3431C22.4616 18.9526 22.4616 18.3195 22.0711 17.9289C21.6805 17.5384 21.0474 17.5384 20.6569 17.9289L14.2929 24.2929ZM34 24L15 24L15 26L34 26L34 24Z" fill="#B7B4AE"/>
            </svg>

        </>
    );
};
// @ts-ignore
export default NewsArrowLeft;