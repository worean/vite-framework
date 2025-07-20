import React from 'react';
import ProfileDropdown from './ProfileDropdown';

interface HeaderProps {
    name: string;
    icon: React.ReactNode;
}

const Header = ({ name, icon }: HeaderProps) => (
    <header style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '16px', borderBottom: '1px solid #e1e1e1' }}>
        <div >
            {icon}
            <h2>{name}</h2>
        </div>
        <ProfileDropdown/>
    </header>
);

export default Header;