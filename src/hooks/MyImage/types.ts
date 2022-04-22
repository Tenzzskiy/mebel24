export interface ISrc {
    default?: string;
    defaultWebp?: string;
    tablet?: string;
    tabletWebp?: string;
    mobile?: string;
    mobileWebp?: string;
}

export interface MyImageProps {
    src: ISrc;
    alt?: string;
    className?: string;
    itemprop?: string;
    width?: string;
    height?: string;
    onClick?: () => void;
    isNoscript?: boolean;
    lazy?: boolean;
}

export interface MyImageWrapperProps extends MyImageProps {
    ratio: number;
    wrapperClass?: string;
}

export interface SourceProps {
    url?: string;
    media?: number;
    lazy?: boolean;
}

export interface SourcesProps {
    src: ISrc;
    lazy?: boolean;
}