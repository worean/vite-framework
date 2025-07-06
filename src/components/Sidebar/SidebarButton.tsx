import React, { useState } from 'react';

interface SidebarButtonProps {
    label: string;
    path: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    onClick?: (path: string) => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
    label,
    path,
    icon,
    isActive = false,
    onClick
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (onClick) {
            onClick(path);
        } else {
            // 기본 동작: 페이지 이동
            window.location.href = path;
        }
    };

    const buttonStyles: React.CSSProperties = {
        display: 'block',
        width: '100%',
        padding: '12px 24px',
        color: isActive ? '#0066cc' : '#222',
        textDecoration: 'none',
        fontWeight: isActive ? 600 : 500,
        borderRadius: '6px',
        margin: '2px 0',
        border: 'none',
        background: isActive 
            ? '#e3f2fd' 
            : isHovered 
                ? '#f0f0f0' 
                : 'transparent',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontSize: '14px',
        textAlign: 'left' as const,
        borderLeft: isActive ? '3px solid #0066cc' : '3px solid transparent',
    };

    return (
        <button
            style={buttonStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            type="button"
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {icon && (
                    <span 
                        style={{ 
                            marginRight: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            color: isActive ? '#0066cc' : '#666'
                        }}
                    >
                        {icon}
                    </span>
                )}
                <span>{label}</span>
            </div>
        </button>
    );
};

export default SidebarButton;