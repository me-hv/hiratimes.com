import React from 'react';
import Sidebar from './Sidebar';
import LeadStory from './LeadStory';
import NewsSection from './NewsSection';
import { leadStory, subLeadStories, sportsNews, entertainmentNews } from '../data/news';

const HomePage = () => {
    return (
        <main className="container" style={{ marginTop: '20px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>

            {/* Left Sidebar (20%) - City News/Quick Links */}
            <aside className="left-sidebar" style={{ width: '220px', flexShrink: 0 }}>
                <Sidebar title="शहर की खबरें" />
                <div style={{ marginTop: '20px' }}>
                    <Sidebar title="ट्रेंडिंग वीडियो" />
                </div>
            </aside>

            {/* Center Content (55%) - Lead Story + Sub Leads + Categories */}
            <section className="main-content" style={{ flex: 1, minWidth: 0 }}>
                <LeadStory story={leadStory} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                    {subLeadStories.map(story => (
                        <div key={story.id}>
                            <img src={story.image} alt={story.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
                            <h3 style={{ fontSize: '18px', marginTop: '10px', lineHeight: '1.3' }}>{story.title}</h3>
                        </div>
                    ))}
                </div>

                <NewsSection title="खेल" articles={sportsNews} />
                <NewsSection title="मनोरंजन" articles={entertainmentNews} />
            </section>

            {/* Right Sidebar (25%) - Latest Updates/Ads */}
            <aside className="right-sidebar" style={{ width: '300px', flexShrink: 0 }}>
                <div style={{ marginBottom: '20px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px' }}>
                    <h3 style={{ borderBottom: '2px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>आज का पंचांग</h3>
                    <p style={{ fontSize: '14px' }}>तिथि: शुक्ल पक्ष, दशमी</p>
                    <p style={{ fontSize: '14px' }}>सूर्योदय: 05:45 AM</p>
                    <p style={{ fontSize: '14px' }}>सूर्यास्त: 07:15 PM</p>
                </div>

                <Sidebar title="ताज़ा ख़बरें" />


            </aside>

        </main>
    );
};

export default HomePage;
