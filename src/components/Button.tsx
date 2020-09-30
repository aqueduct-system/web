import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'destructive';

interface BaseButtonProps {
    variant?: ButtonVariant;
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
}

interface LinkButtonProps extends BaseButtonProps {
    href: string;
}

interface ButtonProps extends BaseButtonProps {
    onClick: () => void;
    href?: never;
}

interface SubmitButtonProps extends BaseButtonProps {
    type: "submit";
    href?: never;
}

type FullButtonProps = LinkButtonProps | ButtonProps | SubmitButtonProps;

function getStyleClasses(variant: ButtonVariant) {
    const base = 'px-4 pt-1 pb-2 rounded font-semibold';

    switch (variant) {
        case 'default': return base + ' hover:bg-gray-200 text-gray-700 hover:text-gray-800';
        case 'primary': return base + ' bg-blue-600 hover:bg-blue-700 text-white';
        case 'secondary': return base + ' border solid border-gray-400 hover:border-gray-500';
        case 'destructive': return base + ' bg-red-600 hover:bg-red-700 text-white';
    }
}

export default function Button({ children, href, onClick, type = "button", variant = "default" }: FullButtonProps) {
    if (href) {
        return (
            <Link to={href} className={getStyleClasses(variant)} onClick={onClick}>
                {children}
            </Link>
        );
    }
    return (
        <button className={getStyleClasses(variant)} onClick={onClick} type={type}>
            {children}
        </button>
    )
}
