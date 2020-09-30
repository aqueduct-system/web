import React, { FunctionComponent } from 'react';

import { NavLink, NavLinkProps } from 'react-router-dom';
import {ReactComponent as LogoSVG} from '../assets/aqueduct.svg';

export type NavItemProps = NavLinkProps & {
    isEnd: boolean;
}

function NavItem({ children, isEnd, ...rest }: NavItemProps) {
    return (
        <NavLink
            {...rest}
            className={`font-semibold text-gray-100 ${isEnd ? 'ml-auto' : 'mr-2'}`}
            activeClassName="font-bold text-blue-200 bg-gray-700 bg-opacity-25"
        >
            <li className="px-3 py-1 rounded hover:bg-gray-700 bg-opacity-25">{children}</li>
        </NavLink>
    )
}
NavItem.defaultProps = {
    isEnd: false,
} as Partial<NavItemProps>;

const Navigation: FunctionComponent = () => {
    return (
        <header className="pt-8 px-4 w-full h-32 relative z-10 bg-gray-800">
            <nav className="content-width flex flex-row items-center">
                <LogoSVG width={48} height={48} className="mr-8 text-blue-500 fill-current" />
                <ul className="flex flex-row w-full">
                    <NavItem to="" end>Dashboard</NavItem>
                    <NavItem to="servers">Servers</NavItem>
                    <NavItem to="settings">Settings</NavItem>
                    <NavItem to="profile" isEnd>Profile</NavItem>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
