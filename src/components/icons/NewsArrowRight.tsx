import React from 'react';
import {SvgProps} from "../../assets/Types/SVG/svg.props";

const NewsArrowRight = ({classname}:SvgProps) => {
    return (
        <>
            <svg className={classname} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="24" stroke="#B7B4AE" strokeWidth="2"/>
                <path d="M16 24C15.4477 24 15 24.4477 15 25C15 25.5523 15.4477 26 16 26L16 24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM16 26L35 26L35 24L16 24L16 26Z" fill="#B7B4AE"/>
            </svg>

        </>
    );
};

export default NewsArrowRight;