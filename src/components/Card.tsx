import React, { FunctionComponent, ReactNode } from 'react';

type CardProps = {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`shadow-md bg-white mb-4 flex flex-col ${className}`}>
            {children}
        </div>
    )
}

const Content: FunctionComponent = ({ children }) => {
    return (
        <div className="p-4">
            {children}
        </div>
    )
}

const Actions: FunctionComponent = ({ children }) => {
    return (
        <div className="mt-auto p-4 flex flex-row bg-gray-200">
            {children}
        </div>
    )
}

Card.Content = Content;
Card.Actions = Actions;

export default Card;
