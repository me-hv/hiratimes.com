import React from 'react';

const Hero = ({ news }) => {
    return (
        <div className="hero" style={{
            position: 'relative',
            height: '500px',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '2rem',
            backgroundImage: `url(${news.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)'
            }}></div>

            <div className="hero-content" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                padding: '2rem',
                color: 'white',
                maxWidth: '800px'
            }}>
                <span style={{
                    backgroundColor: 'var(--color-primary)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    display: 'inline-block'
                }}>
                    {news.category}
                </span>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    lineHeight: '1.2'
                }}>
                    {news.title}
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '1.5rem',
                    opacity: 0.9
                }}>
                    {news.summary}
                </p>
                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{news.time} • IST</span>
            </div>
        </div>
    );
};

export default Hero;
