import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { sportsNews, entertainmentNews } from '../data/news';

// Wrapper to get display name from category slug
const getCategoryName = (slug) => {
    const mapping = {
        'nation': 'देश',
        'world': 'विदेश',
        'state': 'राज्य',
        'city': 'शहर',
        'sports': 'खेल',
        'entertainment': 'मनोरंजन',
        'business': 'बिजनेस',
        'tech': 'टेक',
        'auto': 'ऑटो',
        'religion': 'धर्म',
        'lifestyle': 'लाइफस्टाइल'
    };
    return mapping[slug] || slug;
};

// Generic dummy data generator for categories without specific data
const getCategoryNews = (slug) => {
    if (slug === 'sports') return sportsNews;
    if (slug === 'entertainment') return entertainmentNews;

    // Generate dummy posts for other categories
    return [
        {
            id: 1,
            title: `${getCategoryName(slug)}: प्रमुख और ताज़ा खबरे पढ़े विस्तार से`,
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
            summary: "यह एक डमी खबर है जो इस केटेगरी के पेज को भरने के लिए दिखाई गई है।"
        },
        {
            id: 2,
            title: "महत्वपूर्ण अपडेट: आज की बड़ी खबर यहाँ पढ़िए",
            image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=2067&auto=format&fit=crop",
            summary: "समाचार विस्तार से यहाँ लिखा होगा। अभी यह केवल डमी टेक्स्ट है।"
        },
        {
            id: 3,
            title: "इस मामले में आया नया मोड़, जानिये क्या हुआ",
            image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop",
            summary: "पूरी स्टोरी पढ़ने के लिए क्लिक करें।"
        },
        {
            id: 4,
            title: "विशेष रिपोर्ट: आंकड़ों ने किया सबको हैरान",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            summary: "विश्लेषण और रिपोर्ट यहाँ दी जाएगी।"
        }
    ];
};

const CategoryPage = () => {
    const { category } = useParams();
    const categoryName = getCategoryName(category);
    const articles = getCategoryNews(category);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    return (
        <main className="container" style={{ marginTop: '20px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>

            {/* Left Sidebar */}
            <aside className="left-sidebar" style={{ width: '220px', flexShrink: 0 }}>
                <Sidebar title={`${categoryName} बुलेटिन`} />
            </aside>

            {/* Main Content */}
            <section className="main-content" style={{ flex: 1, minWidth: 0, minHeight: '600px' }}>
                <div style={{
                    borderBottom: '4px solid var(--color-primary)',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <h1 style={{
                        fontSize: '32px',
                        color: 'var(--color-primary)',
                        paddingBottom: '10px',
                        margin: 0
                    }}>
                        {categoryName}
                    </h1>
                </div>

                <div className="category-news-grid" style={{ display: 'grid', gap: '30px' }}>
                    {articles.map(article => (
                        <div key={article.id} style={{ display: 'flex', gap: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                            <img
                                src={article.image}
                                alt={article.title}
                                style={{ width: '250px', height: '160px', objectFit: 'cover', borderRadius: '4px' }}
                            />
                            <div>
                                <h2 style={{ fontSize: '24px', marginBottom: '10px', lineHeight: '1.3' }}>
                                    {article.title}
                                </h2>
                                <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>
                                    {article.summary || article.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Right Sidebar */}
            <aside className="right-sidebar" style={{ width: '300px', flexShrink: 0 }}>
                <div style={{ marginBottom: '20px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px' }}>
                    <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>ट्रेंडिंग</h3>
                    <p>सबसे ज्यादा पढ़ी गयी खबरें</p>
                </div>

            </aside>

        </main>
    );
};

export default CategoryPage;
