import React from 'react';

interface HeaderProps {
    name: string;
    icon: React.ReactNode;
}

const Header = ({ name, icon }: HeaderProps) => (
    <header style={{ display: 'flex', alignItems: 'center', gap: '4px',  margin: '16px', borderBottom: '1px solid #e1e1e1' }}>
        {icon}
        <h2>{name}</h2>
    </header>
);

export default Header;