
import React from 'react';

interface SidebarGroupButtonProps {
    name: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
}

const SidebarGroupButton = ({name, icon, isActive, onClick } : SidebarGroupButtonProps) => {
    <div>
        <button
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 24px',
                color: isActive ? '#0066cc' : '#222',
                background: isActive ? '#e3f2fd' : 'transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '100%',
                fontSize: '14px',
                fontWeight: isActive ? 600 : 500,
            }}
            onClick={onClick}
        >
            {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
            <span>{name}</span>
        </button>
    </div>

}

export default SidebarGroupButton;