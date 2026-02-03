import React from 'react';
import { Link } from 'react-router-dom';
import { navCategories } from '../data/news';

const Header = () => {
    const date = new Date().toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <header className="header" style={{ fontFamily: 'var(--font-family-sans)' }}>
            {/* 1. Edition & Top Utils Bar */}
            <div style={{ borderBottom: '1px solid #ddd', fontSize: '11px', padding: '4px 0', color: '#666' }}>
                <div className="container flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-black">Edition</span>
                        <select style={{ border: 'none', background: 'transparent', fontSize: '11px', fontWeight: 'bold' }}>
                            <option>IN</option>
                        </select>
                        <span className="separator"></span>
                        <div className="flex items-center gap-1">
                            <span>{date}</span>
                            <span className="separator"></span>
                            <span>Updated 05:30 PM IST</span>
                        </div>
                        <span className="separator"></span>
                        <div className="flex items-center gap-1">
                            <span>New Delhi</span>
                            <span>28°C</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href="#" style={{ color: '#d32f2f', fontWeight: 'bold', border: '1px solid #d32f2f', padding: '2px 8px', borderRadius: '2px' }}>Read ePaper</a>
                        <a href="#" style={{ backgroundColor: '#d32f2f', color: 'white', fontWeight: 'bold', padding: '3px 8px', borderRadius: '2px' }}>Subscribe to HT+</a>
                        <div className="flex items-center gap-2" style={{ marginLeft: '10px' }}>
                            <span style={{ cursor: 'pointer' }}>Sign In</span>
                            {/* Social Icons (Simplified) */}
                            <div className="flex gap-2">
                                <SocialIcon type="fb" />
                                <SocialIcon type="twitter" />
                                <SocialIcon type="youtube" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Main Logo Area */}
            <div className="container" style={{ padding: '20px 0', textAlign: 'center' }}>
                <h1 style={{
                    fontFamily: '"Times New Roman", Times, serif',
                    fontSize: '56px',
                    fontWeight: '900',
                    margin: 0,
                    letterSpacing: '-2px',
                    color: '#000',
                    lineHeight: 1
                }}>
                    HIRA TIMES
                </h1>
                <div style={{ fontSize: '12px', color: '#555', marginTop: '5px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Trusted News. Real Time.
                </div>
            </div>

            {/* 3. Main Navigation */}
            <nav style={{ borderTop: '1px solid #000', borderBottom: '4px solid #b71c1c', position: 'sticky', top: 0, background: 'white', zIndex: 1000 }}>
                <div className="container flex justify-between items-center">
                    <div className="flex items-center">
                        <span style={{ fontWeight: '900', fontSize: '24px', marginRight: '15px' }}>HT+</span>
                        <ul className="flex" style={{ listStyle: 'none', gap: '0', fontSize: '13px', fontWeight: 'bold' }}>
                            {navCategories.map((cat, idx) => (
                                <li key={idx}>
                                    <Link to={cat.path} style={{ display: 'block', padding: '10px 12px', color: '#000', textTransform: 'uppercase' }} className="nav-link">
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-3">
                        <SearchIcon />
                        <MenuIcon />
                    </div>
                </div>
            </nav>

            {/* 4. Sub Navigation / Trending */}
            <div style={{ borderBottom: '1px solid #e0e0e0', padding: '8px 0', fontSize: '12px', backgroundColor: '#f9f9f9' }}>
                <div className="container flex items-center overflow-auto" style={{ gap: '15px', whiteSpace: 'nowrap' }}>
                    <span style={{ color: '#d32f2f', fontWeight: 'bold', textTransform: 'uppercase' }}>In The News</span>
                    <a href="#">Simultaneous Polls</a>
                    <a href="#">G20 Summit</a>
                    <a href="#">Cricket World Cup</a>
                    <a href="#">ISRO Solar Mission</a>
                    <a href="#">Stock Market</a>
                </div>
            </div>

            {/* 5. Breaking News Banner */}
            <div className="container" style={{ marginTop: '10px' }}>
                <div className="flex items-center" style={{ backgroundColor: '#d32f2f', color: 'white', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ padding: '8px 15px', fontWeight: 'bold', backgroundColor: 'white', color: '#d32f2f', margin: '2px', borderRadius: '2px' }}>
                        BREAKING
                    </div>
                    <div style={{ padding: '8px 15px', fontWeight: '500', fontSize: '14px', flex: 1 }}>
                        Sensex crashes 800 points amid global sell-off; Nifty below 19,500
                    </div>
                    <div style={{ padding: '0 15px', cursor: 'pointer' }}>✕</div>
                </div>
            </div>
        </header>
    );
};

// Simple Icon Components
const SocialIcon = ({ type }) => {
    const colors = { fb: '#3b5998', twitter: '#000', youtube: '#c4302b' };
    return (
        <div style={{
            width: '20px', height: '20px', borderRadius: '50%', border: `1px solid ${colors[type]}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors[type], fontSize: '10px'
        }}>
            {type[0].toUpperCase()}
        </div>
    );
};

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

export default Header;
