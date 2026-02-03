import React from 'react';

const NewsCard = ({ news }) => {
    return (
        <div className="news-card" style={{
            backgroundColor: '#fff', // White background
            borderBottom: '1px solid #e0e0e0', // Separator line
            paddingBottom: '16px',
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
        }}>
            <div className="card-image" style={{
                height: '180px',
                width: '100%',
                backgroundImage: `url(${news.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                marginBottom: '12px'
            }}></div>

            <div className="card-content" style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="#" style={{
                    color: '#d32f2f',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                    textDecoration: 'none'
                }}>
                    {news.category || 'News'}
                </a>

                <h3 style={{
                    fontSize: '18px',
                    marginBottom: '8px',
                    lineHeight: '1.3',
                    fontFamily: 'var(--font-family-serif)',
                    fontWeight: 700,
                    color: '#000'
                }}>
                    {news.title}
                </h3>

                <div style={{ fontSize: '11px', color: '#666' }}>
                    {news.time}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
