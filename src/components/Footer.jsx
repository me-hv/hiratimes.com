import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#000',
            color: '#999',
            padding: '40px 0',
            marginTop: '4rem',
            fontFamily: 'var(--font-family-sans)',
            fontSize: '12px'
        }}>
            <div className="container">
                {/* Top Links */}
                <div style={{ paddingBottom: '20px', borderBottom: '1px solid #333', marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <Link to="#" style={{ color: '#fff' }}>About Us</Link>
                    <Link to="#" style={{ color: '#fff' }}>Terms of Use</Link>
                    <Link to="#" style={{ color: '#fff' }}>Privacy Policy</Link>
                    <Link to="#" style={{ color: '#fff' }}>Cookie Policy</Link>
                    <Link to="#" style={{ color: '#fff' }}>RSS</Link>
                    <Link to="#" style={{ color: '#fff' }}>Newsletter</Link>
                    <Link to="#" style={{ color: '#fff' }}>Sitemap</Link>
                </div>

                {/* Copyright Area */}
                <div style={{ textAlign: 'center' }}>
                    <p style={{ marginBottom: '10px' }}>
                        Copyright © {new Date().getFullYear()} Hira Times Prakashan Limited. All rights reserved.
                    </p>
                    <div style={{ marginTop: '10px' }}>
                        <span style={{ color: '#666' }}>Powered by Hira Times</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
