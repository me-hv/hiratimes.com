import React from 'react';

const LeadStory = ({ story }) => {
    return (
        <div className="lead-story" style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={story.image}
                    alt={story.title}
                    style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '4px' }}
                />

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)',
                    padding: '2rem 1.5rem 1rem',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '40%'
                }}>
                    <div style={{
                        marginBottom: '10px',
                        display: 'inline-block',
                    }}>
                        <span style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            padding: '4px 10px',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            borderRadius: '2px',
                            textTransform: 'uppercase'
                        }}>
                            TOP NEWS
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: '32px',
                        lineHeight: '1.3',
                        color: 'white',
                        fontWeight: 'bold',
                        fontFamily: 'var(--font-family-serif)',
                        margin: 0,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                        {story.title}
                    </h1>
                </div>

                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '4px 8px',
                    fontSize: '12px',
                    borderRadius: '4px',
                    zIndex: 2
                }}>
                    <i className="fas fa-camera"></i> Photos
                </div>
            </div>

            <p style={{
                fontSize: '18px',
                color: '#444',
                marginTop: '10px',
                lineHeight: '1.5',
                fontFamily: 'var(--font-family-serif)'
            }}>
                {story.summary}
            </p>

            <div style={{ marginTop: '10px', fontSize: '13px', color: '#666' }}>
                <span style={{ fontWeight: '500' }}>{story.author}</span> | {story.time}
            </div>

            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                <button style={{
                    backgroundColor: '#25D366',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}>
                    <span style={{ fontSize: '16px' }}>✆</span> Share
                </button>
                <button style={{
                    backgroundColor: '#3b5998',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '13px'
                }}>
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default LeadStory;
