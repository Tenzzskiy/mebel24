/* eslint-disable react/jsx-props-no-spreading */
import React, { CSSProperties, useEffect, useRef } from 'react';
import clsx from 'clsx';
import LazyLoad, { ILazyLoadInstance } from 'vanilla-lazyload';

import s from './MyImage.module.scss'
import { MyImageProps, MyImageWrapperProps } from './types';
import { Sources } from './Sources';

let lazyLoadInstance: null | ILazyLoadInstance = null;

const MyImage = (props: MyImageProps): JSX.Element => {
    const {
        src,
        alt,
        className,
        itemprop,
        width = 'auto',
        height = 'auto',
        onClick,
        isNoscript = false,
        lazy = true,
    } = props;
    const imgRef = useRef<HTMLImageElement | null>(null);

    const renderImage = (): JSX.Element => (
        <>
            <picture>
                <Sources src={src} />
                <img
                    ref={imgRef}
                    className={clsx(className, lazy && 'lazy')}
                    data-src={src.default}
                    src={lazy ? ' ' : src.default}
                    width={width}
                    height={height}
                    alt={alt}
                    itemProp={itemprop || undefined}
                />
            </picture>
            {isNoscript && (
                <noscript>
                    <img
                        src={src.default}
                        alt={alt}
                        title={alt}
                        itemProp={itemprop || undefined}
                    />
                </noscript>
            )}
        </>
    );

    useEffect(() => {
        if (!lazyLoadInstance) {
            lazyLoadInstance = new LazyLoad({
                elements_selector: '.lazy',
                threshold: 0,
            });
        }
        LazyLoad.resetStatus(imgRef.current as HTMLElement);
        lazyLoadInstance?.update();
    }, [src]);

    if (onClick) {
        return (
            <>
                {renderImage()}
                <button
                    className={s.button}
                    type="button"
                    onClick={onClick}
                    aria-label="Открыть картинку большого размера"
                />
            </>
        );
    }

    return renderImage();
};

const MyImageWrapper = (props: MyImageWrapperProps): JSX.Element => {
    const { wrapperClass, ratio, ...otherProps } = props;

    return (
        <span
            className={clsx(
                s.wrapper,
                wrapperClass,
                otherProps.onClick && s.wrapperInteractive,
            )}
            style={{ '--paddingTop': `${ratio * 100}%` } as CSSProperties}
        >
            <MyImage
                {...props}
                className={clsx(
                    s.image,
                    otherProps.onClick ? s.imageInteractive : '',
                )}
            />
        </span>
    );
};

export { MyImage, MyImageWrapper };