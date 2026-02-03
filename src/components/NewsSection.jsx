import React from 'react';

const NewsSection = ({ title, articles }) => {
    return (
        <div className="news-section" style={{ marginBottom: '30px' }}>
            <div style={{
                borderBottom: '1px solid #e0e0e0',
                marginBottom: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end'
            }}>
                <h2 style={{
                    color: '#000',

                    margin: 0,
                    fontSize: '18px',
                    textTransform: 'uppercase',

                    fontWeight: 900,
                    fontFamily: 'var(--font-family-sans)'
                }}>
                    {title}
                </h2>
                <a href="#" style={{ color: '#d32f2f', fontSize: '11px', fontWeight: 'bold' }}>MORE &gt;</a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                {articles.map(article => (
                    <div key={article.id} className="section-card">
                        <div style={{ height: '140px', overflow: 'hidden', borderRadius: '4px', marginBottom: '8px' }}>
                            <img
                                src={article.image}
                                alt={article.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <h3 style={{ fontSize: '16px', marginTop: '5px', lineHeight: '1.3', fontWeight: 'bold', fontFamily: 'var(--font-family-serif)' }}>
                            {article.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsSection;
