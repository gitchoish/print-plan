import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import StructuredData from '../components/seo/StructuredData';
import guidesData from '../data/guides.json';
import './TemplateDetail.css';

const GuideDetail = () => {
    const { slug } = useParams();
    const guide = guidesData.find(g => g.slug === slug);

    if (!guide) {
        return (
            <div className="container py-16 text-center">
                <h1>Guide Not Found</h1>
                <p>Sorry, the guide you're looking for doesn't exist.</p>
                <Link to="/guides" className="btn btn-primary mt-4">Back to Guides</Link>
            </div>
        );
    }

    const relatedGuides = guidesData
        .filter(g => g.id !== guide.id && g.category === guide.category)
        .slice(0, 3);

    const renderMarkdown = (text) => {
        return text
            .replace(/^## (.*$)/gim, (match, p1) => `<h2 id="${p1.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')}">${p1}</h2>`)
            .replace(/^### (.*$)/gim, (match, p1) => `<h3 id="${p1.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')}">${p1}</h3>`)
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\n\n/g, '<br/><br/>');
    };

    return (
        <>
            <SEO
                title={guide.title}
                description={guide.description}
                type="article"
                image={guide.heroImage}
                canonical={`/guides/${guide.slug}`}
            />
            <StructuredData
                type="HowTo"
                data={{
                    title: guide.title,
                    image: guide.heroImage,
                    updatedAt: guide.updatedAt
                }}
            />

            <article className="template-detail">
                <header className="detail-header">
                    <div className="container">
                        <div className="breadcrumbs">
                            <Link to="/">Home</Link> &rsaquo; <Link to="/guides">Guides</Link> &rsaquo; {guide.category}
                        </div>
                        <h1 className="detail-title">{guide.title}</h1>
                        <div className="detail-meta">
                            <span>Published: {new Date(guide.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            <span className="dot">•</span>
                            <span>Category: {guide.category}</span>
                        </div>
                    </div>
                </header>

                <div className="container detail-layout">
                    <div className="detail-main">
                        <img src={guide.heroImage} alt={guide.title} className="detail-hero-img" />

                        <div className="detail-body">
                            <div
                                className="content-render"
                                dangerouslySetInnerHTML={{ __html: renderMarkdown(guide.body) }}
                            />
                        </div>

                        <div className="guide-cta-box" style={{ background: 'var(--surface)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', margin: '4rem 0', border: '1px solid var(--border)' }}>
                            <h3>Ready to apply this guide?</h3>
                            <p>Download our professional templates to put these concepts into practice today.</p>
                            <Link to="/templates" className="btn btn-primary">Browse Templates</Link>
                        </div>

                        {relatedGuides.length > 0 && (
                            <section className="related-section">
                                <h3 className="section-title">More in {guide.category}</h3>
                                <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
                                    {relatedGuides.map(g => (
                                        <Link key={g.id} to={`/guides/${g.slug}`} className="card guide-card-link">
                                            <div className="card-image" style={{ aspectRatio: '16/9' }}>
                                                <img src={g.heroImage} alt={g.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div className="card-content">
                                                <h4 className="card-title" style={{ fontSize: '1rem' }}>{g.title}</h4>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <aside className="detail-sidebar">
                        <div className="sidebar-box">
                            <h4 className="sidebar-title">Tags</h4>
                            <div className="tag-cloud">
                                {guide.tags.map(tag => (
                                    <span key={tag} className="tag-link">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-box sticky-sidebar">
                            <h4 className="sidebar-title">Newsletter</h4>
                            <p>Get new guides and templates delivered to your inbox every week.</p>
                            <form className="sidebar-form" onSubmit={e => e.preventDefault()}>
                                <input type="email" placeholder="Email" style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }} />
                                <button className="btn btn-primary btn-sm" style={{ width: '100%' }}>Join Now</button>
                            </form>
                        </div>
                    </aside>
                </div>
            </article>
        </>
    );
};

export default GuideDetail;
