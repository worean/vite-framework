import React, { useState } from 'react';
import SidebarButton from './SidebarButton';

type MenuItem = {
    label: string;
    path: string;
    icon?: React.ReactNode;
};

const menuItems: MenuItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Settings', path: '/settings' },
    // 필요에 따라 메뉴 추가
];

const Sidebar: React.FC = () => {
    const [activeTab, setActiveTab] = useState('/');

    const handleMenuClick = (path: string) => {
        setActiveTab(path);
        // 여기에 추가적인 네비게이션 로직을 구현할 수 있습니다
        // 예: react-router의 navigate 함수 사용
    };

    return (
        <aside
            style={{
                width: 220,
                height: '100vh',
                background: '#f5f6fa',
                borderRight: '1px solid #e1e1e1',
                padding: '24px 0',
                boxSizing: 'border-box',
            }}
        >
            <nav>
                <div style={{ padding: '0 12px' }}>
                    {menuItems.map((item) => (
                        <SidebarButton
                            key={item.path}
                            label={item.label}
                            path={item.path}
                            icon={item.icon}
                            isActive={activeTab === item.path}
                            onClick={handleMenuClick}
                        />
                    ))}
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;