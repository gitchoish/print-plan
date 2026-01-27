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
                            <Link to="/">Home</Link> &rsaquo; <Link to="/templates">Templates</Link> &rsaquo; <Link to={`/templates?category=${template.category}`}>{template.category}</Link>
                        </div>
                        <h1 className="detail-title">{template.title}</h1>
                        <p className="detail-hero-summary">{template.heroSummary || template.description}</p>
                        <div className="detail-meta">
                            <span>Updated: {new Date(template.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            <span className="dot">•</span>
                            <span>Category: {template.category}</span>
                            <span className="dot">•</span>
                            <span className="badge badge-free">Free Instant Download</span>
                        </div>
                    </div>
                </header>

                <div className="container detail-layout">
                    <div className="detail-main">
                        <div className="detail-hero-section">
                            <img src={template.heroImage} alt={template.title} className="detail-hero-img" />
                            <div className="file-info-box">
                                <h4>File Information</h4>
                                <ul>
                                    <li><strong>Format:</strong> PDF (High Resolution)</li>
                                    <li><strong>Sizes Included:</strong> A4 & US Letter</li>
                                    <li><strong>Pages:</strong> {template.pageCount || '1 Page'}</li>
                                    <li><strong>Color Mode:</strong> Black & White (Ink Friendly)</li>
                                </ul>
                                <a href="#download" className="btn btn-primary btn-block">Jump to Download</a>
                            </div>
                        </div>

                        <div className="detail-body">
                            {/* Target & Problem Solved */}
                            <div className="content-grid mb-12">
                                <section className="who-this-is-for">
                                    <h3>Who This Is For</h3>
                                    <ul>
                                        {template.whoIsItFor?.map((item, i) => <li key={i}>{item}</li>) || <li>Anyone looking to stay organized.</li>}
                                    </ul>
                                </section>
                                <section className="problems-solved">
                                    <h3>What Problem It Solves</h3>
                                    <div className="problem-solution">
                                        <h4>Key Challenges:</h4>
                                        <ul>
                                            {template.problemsSolved?.challenges.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                        <h4>Expected Results:</h4>
                                        <ul>
                                            {template.problemsSolved?.results.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                </section>
                            </div>

                            {/* How to Use */}
                            <section className="how-to-use-detailed mb-12">
                                <h3>How to Use This Template (Step-by-Step)</h3>
                                <ol className="step-list">
                                    {template.howToUseStepByStep?.map((step, i) => (
                                        <li key={i}>
                                            <strong>{step.title}:</strong> {step.description}
                                        </li>
                                    ))}
                                </ol>
                            </section>

                            {/* Printing Tips */}
                            <section className="printing-tips mb-12">
                                <div className="tips-card">
                                    <h3><span className="icon">🖨️</span> Printing & Setup Tips</h3>
                                    <div className="tips-grid">
                                        {template.printingTips?.map((tip, i) => (
                                            <div key={i} className="tip-item">
                                                <strong>{tip.title}</strong>
                                                <p>{tip.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Filled Example */}
                            {template.filledExample && (
                                <section className="filled-example mb-12">
                                    <h3>Sample Workflow / Filled Example</h3>
                                    <div className="example-box">
                                        <p>{template.filledExample.description}</p>
                                        <div className="example-data-table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        {template.filledExample.headers.map((h, i) => <th key={i}>{h}</th>)}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {template.filledExample.rows.map((row, i) => (
                                                        <tr key={i}>
                                                            {row.map((cell, j) => <td key={j}>{cell}</td>)}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Original Content */}
                            <div className="content-render mb-12">
                                <h3>Detailed Description</h3>
                                <div dangerouslySetInnerHTML={{ __html: renderMarkdown(template.body) }} />
                            </div>

                            {/* FAQ Section */}
                            <section className="faq-section mb-12" id="faq">
                                <h3>Frequently Asked Questions</h3>
                                <div className="faq-list">
                                    {template.faqs?.map((faq, i) => (
                                        <div key={i} className="faq-item">
                                            <h4>{faq.question}</h4>
                                            <p>{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* License Box */}
                            <section className="license-box mb-12">
                                <h3>License & Usage</h3>
                                <div className="license-card">
                                    <p><strong>License:</strong> {template.license?.type || 'Personal Use Only'}</p>
                                    <ul>
                                        <li>✅ {template.license?.allowed || 'Print as many copies as you need for personal use.'}</li>
                                        <li>❌ {template.license?.forbidden || 'Reselling, redistribution, or commercial use is strictly prohibited.'}</li>
                                    </ul>
                                    <p className="copyright-text">© {new Date().getFullYear()} Print Plan Lab. All designs are original and created in-house.</p>
                                </div>
                            </section>
                        </div>

                        <section className="download-section" id="download">
                            <div className="download-card">
                                <h3>Download Your Free Template</h3>
                                <p>Click the buttons below to download the high-resolution printable files. No email required.</p>
                                <div className="download-actions">
                                    <a href={template.downloadLinks.pdf} className="btn btn-primary btn-lg" download>Download PDF (Printable)</a>
                                    <a href={template.downloadLinks.png} className="btn btn-outline btn-lg" download>Download PNG (Digital Planning)</a>
                                </div>
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
                                <h3 className="section-title">Related Templates</h3>
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
                            <h4 className="sidebar-title">Useful Guides</h4>
                            <ul className="sidebar-links">
                                <li><Link to="/guides/how-to-print-without-margins">How to Print Without Margins</Link></li>
                                <li><Link to="/guides/how-to-use-printables-on-ipad">Using Templates on iPad</Link></li>
                                <li><Link to="/blog/why-paper-planners-still-win">Paper vs Digital Planners</Link></li>
                            </ul>
                        </div>

                        <div className="sidebar-box">
                            <h4 className="sidebar-title">Tags</h4>
                            <div className="tag-cloud">
                                {template.tags.map(tag => (
                                    <Link key={tag} to={`/templates?tag=${tag}`} className="tag-link">{tag}</Link>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-box sticky-sidebar">
                            <h4 className="sidebar-title">Our Philosophy</h4>
                            <p>We design every template in-house with Focus & Utility as our primary goals. No clutter, just effectiveness.</p>
                            <Link to="/about" className="text-link">Our design process &rarr;</Link>
                        </div>
                    </aside>
                </div>
            </article>
        </>
    );
};

export default TemplateDetail;
