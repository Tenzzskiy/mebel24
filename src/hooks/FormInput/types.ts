import React from 'react';

export interface FormInputProps {
    type?: React.HTMLInputTypeAttribute;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    mask?: boolean;
    className?: string;
    focusOnMount?: boolean;
}