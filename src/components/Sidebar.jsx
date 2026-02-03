import React from 'react';
import { sidebarNews } from '../data/news';

const Sidebar = ({ title }) => {
    return (
        <div className="sidebar" style={{ borderTop: '4px solid var(--color-primary)', backgroundColor: '#fff', border: '1px solid #e0e0e0', borderTopWidth: '4px' }}>
            <div style={{
                color: 'var(--color-text-main)',
                padding: '8px 12px',
                fontWeight: 'bold',
                fontSize: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #e0e0e0',
                fontFamily: 'var(--font-family-sans)',
                textTransform: 'uppercase'
            }}>
                {title}
                <span style={{ fontSize: '11px', cursor: 'pointer', color: 'var(--color-primary)' }}>MORE &gt;</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {sidebarNews.map((item, index) => (
                    <li key={item.id} style={{
                        padding: '12px',
                        borderBottom: '1px solid #eee',
                        fontSize: '14px',
                        lineHeight: '1.4'
                    }}>
                        <a href="#" style={{ display: 'block', color: 'var(--color-text-main)', fontWeight: 500, fontFamily: 'var(--font-family-serif)' }}>
                            {item.title}
                        </a>
                        <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                            {item.time}
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Sidebar;
