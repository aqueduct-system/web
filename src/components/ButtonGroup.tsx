import React, { PropsWithChildren } from 'react'

type ButtonGroupProps = {
    className?: string;
}

export default function ButtonGroup({ children, className, ...rest }: PropsWithChildren<ButtonGroupProps>) {
    return (
        <div className={`button-group ${className}`} {...rest}>
            {children}
        </div>
    )
}
