import React, { useState } from 'react';
import SidebarButton from './SidebarButton';
import './sidebar.css'; // 스타일을 위한 CSS 파일 임포트

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

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('/');

    const handleMenuClick = (path: string) => {
        setActiveTab(path);
        // 여기에 추가적인 네비게이션 로직을 구현할 수 있습니다
        // 예: react-router의 navigate 함수 사용
    };

    return (
        <aside
            className='sidebar'
        >
            {/* 사이드바 상단에 로고나 제목을 넣을 수 있다. */}
            <div>
                <h1>사이드 바</h1>
                <p> 여기에 상단 정보를 넣을 수 있습니다.</p>
            </div>

            {/* 여기에 메뉴 버튼 및 Group이 들어간다. */}
            <nav style={{ flex: 1, backgroundColor: '#4f4f4f' }}>
                <div>   {/* 메뉴 아이템을 맵핑하여 버튼 생성 */}
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

            {/* 여기에는 사용자 정보 및 설정 버튼이 들어간다. */}
            <div style={{ flex: '0 0 auto', padding: '12px', marginTop: 'auto' }}>
                <h3>User Info</h3>
                <p>Username: John Doe</p>
                <button style={{ marginTop: '10px' }}>Settings</button>
            </div>
        </aside>
    );
};

export default Sidebar;