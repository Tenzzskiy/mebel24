import React from 'react';



import { SourceProps, SourcesProps } from './types';

const Source = (props: SourceProps): JSX.Element | null => {
    const { url, media, lazy } = props;
    // const placeholder = '/placeholder.png';

    if (url) {
        const extension = url.slice(-4) === 'webp' ? 'webp' : 'jpg';

        return (
            <source
                data-srcset={url}
                srcSet={lazy ? ' ' : url}
                media={media ? `(max-width: ${media}px)` : undefined}
                type={`image/${extension}`}
            />
        );
    }

    return null;
};

const Sources = (props: SourcesProps): JSX.Element => {
    const { src, lazy } = props;
    const MOBILE = 767;
    const TABLET = 1175;
    return (
        <>
            <Source url={src.mobileWebp} media={MOBILE} lazy={lazy} />
            <Source url={src.mobile} media={MOBILE} lazy={lazy} />
            <Source url={src.tabletWebp} media={TABLET} lazy={lazy} />
            <Source url={src.tablet} media={TABLET} lazy={lazy} />
            <Source url={src.defaultWebp} lazy={lazy} />
        </>
    );
};

export { Sources };