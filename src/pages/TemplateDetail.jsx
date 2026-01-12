import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import StructuredData from '../components/seo/StructuredData';
import TemplateCard from '../components/ui/TemplateCard';
import templatesData from '../data/templates.json';
import './TemplateDetail.css';

const TemplateDetail = () => {
    const { slug } = useParams();
    const template = templatesData.find(t => t.slug === slug);

    if (!template) {
        return (
            <div className="container py-16 text-center">
                <h1>Template Not Found</h1>
                <p>Sorry, the template you're looking for doesn't exist.</p>
                <Link to="/templates" className="btn btn-primary mt-4">Back to Templates</Link>
            </div>
        );
    }

    const relatedTemplates = templatesData
        .filter(t => t.id !== template.id && (t.category === template.category || t.tags.some(tag => template.tags.includes(tag))))
        .slice(0, 3);

    const toc = template.body.split('\n')
        .filter(line => line.startsWith('## ') || line.startsWith('### '))
        .map(line => ({
            level: line.startsWith('###') ? 3 : 2,
            text: line.replace(/^#+ /, ''),
            id: line.replace(/^#+ /, '').toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')
        }));

    const handleShare = (platform) => {
        const url = window.location.href;
        const title = template.title;
        const text = template.description;

        if (platform === 'instagram' || platform === 'share') {
            if (navigator.share) {
                navigator.share({
                    title: title,
                    text: text,
                    url: url
                }).catch(console.error);
                return;
            } else {
                navigator.clipboard.writeText(url);
                alert('Link copied to clipboard! You can now share it on Instagram.');
                return;
            }
        }

        let shareUrl = '';
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

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
                title={template.title}
                description={template.description}
                type="product"
                image={template.heroImage}
                canonical={`/templates/${template.slug}`}
            />
            <StructuredData
                type="Product"
                data={{
                    title: template.title,
                    image: template.heroImage,
                    description: template.description,
                    url: `https://printplanlab.com/templates/${template.slug}`,
                    category: template.category
                }}
            />

            <article className="template-detail">
                <header className="detail-header">
                    <div className="container">
                        <div className="breadcrumbs">
                            <Link to="/">Home</Link> &rsaquo; <Link to="/templates">Templates</Link> &rsaquo; <Link to={`/category/${template.category}`}>{template.category}</Link>
                        </div>
                        <h1 className="detail-title">{template.title}</h1>
                        <div className="detail-meta">
                            <span>Updated: {new Date(template.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            <span className="dot">•</span>
                            <span>Category: {template.category}</span>
                        </div>
                    </div>
                </header>

                <div className="container detail-layout">
                    <div className="detail-main">
                        <img src={template.heroImage} alt={template.title} className="detail-hero-img" />

                        <div className="detail-body">
                            {toc.length > 0 && (
                                <div className="toc-box">
                                    <h4 className="toc-title">Table of Contents</h4>
                                    <ul>
                                        {toc.map((item, idx) => (
                                            <li key={idx} className={`toc-level-${item.level}`}>
                                                <a href={`#${item.id}`}>{item.text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div
                                className="content-render"
                                dangerouslySetInnerHTML={{ __html: renderMarkdown(template.body) }}
                            />
                        </div>

                        <section className="download-section" id="download">
                            <div className="download-card">
                                <h3>Download Your Free Template</h3>
                                <p>Click the buttons below to download the high-resolution printable files.</p>
                                <div className="download-actions">
                                    <a href={template.downloadLinks.pdf} className="btn btn-primary" download>Download PDF</a>
                                    <a href={template.downloadLinks.png} className="btn btn-outline" download>Download PNG Image</a>
                                </div>
                                <p className="download-note">Files are for personal use only. Do not redistribute.</p>
                            </div>
                        </section>

                        <section className="share-section" style={{ marginTop: '2rem', padding: '2rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Share this Template</h3>
                            <div className="share-links" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <button onClick={() => handleShare('facebook')} className="btn btn-sm" style={{ background: '#1877F2', color: 'white', border: 'none' }}>Facebook</button>
                                <button onClick={() => handleShare('twitter')} className="btn btn-sm" style={{ background: '#1DA1F2', color: 'white', border: 'none' }}>Twitter</button>
                                <button onClick={() => handleShare('instagram')} className="btn btn-sm" style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', color: 'white', border: 'none' }}>Instagram</button>
                                <button onClick={() => handleShare('share')} className="btn btn-sm btn-outline">Copy Link</button>
                            </div>
                        </section>

                        {relatedTemplates.length > 0 && (
                            <section className="related-section">
                                <h3 className="section-title">You Might Also Like</h3>
                                <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
                                    {relatedTemplates.map(t => (
                                        <TemplateCard key={t.id} template={t} />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <aside className="detail-sidebar">
                        <div className="sidebar-box">
                            <h4 className="sidebar-title">Tags</h4>
                            <div className="tag-cloud">
                                {template.tags.map(tag => (
                                    <Link key={tag} to={`/tag/${tag}`} className="tag-link">{tag}</Link>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-box sticky-sidebar">
                            <h4 className="sidebar-title">Why it Works</h4>
                            <p>Our templates are based on productivity psychology to help you build lasting habits and reduce stress.</p>
                            <Link to="/about" className="text-link">Learn about our process &rarr;</Link>
                        </div>
                    </aside>
                </div>
            </article>
        </>
    );
};

export default TemplateDetail;
