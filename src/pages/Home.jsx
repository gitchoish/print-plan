import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import TemplateCard from '../components/ui/TemplateCard';
import templatesData from '../data/templates.json';
import './Home.css';

const Home = () => {
    // Get 6 popular templates for the home page
    const featuredTemplates = templatesData.slice(0, 6);

    return (
        <>
            <SEO
                title="Free Printable Templates & Organization Guides"
                description="Download free high-quality checklists, planners, and habit trackers. Expert guides on productivity, home organization, and routine building."
            />

            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">Organize Your Life with <span className="text-primary">Print & Plan Lab</span></h1>
                        <p className="hero-description">
                            Free, professional-grade printable templates designed to reduce mental load and boost your productivity. From daily routines to home management, we've got you covered.
                        </p>
                        <div className="hero-actions">
                            <Link to="/templates" className="btn btn-primary btn-lg">Browse Templates</Link>
                            <Link to="/guides" className="btn btn-outline btn-lg">View Guides</Link>
                        </div>
                    </div>
                    <div className="hero-image-placeholder">
                        {/* In a real site, this would be an illustration or product mockup */}
                        <div className="mockup-ui">
                            <div className="mockup-page">📋 Checklist</div>
                            <div className="mockup-page">🗓️ Planner</div>
                            <div className="mockup-page">✅ Habit Tracker</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section">
                <div className="trust-signals">
                    <div className="trust-item">
                        <div className="trust-icon">🔬</div>
                        <h4>Science-Backed</h4>
                        <p>Our templates are based on proven psychological principles of productivity and habit formation.</p>
                    </div>
                    <div className="trust-item">
                        <div className="trust-icon">🖨️</div>
                        <h4>Ink-Friendly</h4>
                        <p>High-contrast, functional designs that won't drain your printer's ink cartridges.</p>
                    </div>
                    <div className="trust-item">
                        <div className="trust-icon">🔓</div>
                        <h4>100% Free</h4>
                        <p>No account required. No 'gated' content. One-click instant PDF and PNG downloads.</p>
                    </div>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="section-header">
                        <h2 className="section-title">Popular Templates</h2>
                        <Link to="/templates" className="view-all">View All Templates &rarr;</Link>
                    </div>
                    <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
                        {featuredTemplates.map(template => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </div>
                </section>

                <section className="section categories-showcase">
                    <h2 className="text-center mb-8">Browse by Category</h2>
                    <div className="category-grid">
                        <Link to="/templates?category=Productivity" className="category-pill">Productivity</Link>
                        <Link to="/templates?category=Organization" className="category-pill">Home Organization</Link>
                        <Link to="/templates?category=Education" className="category-pill">Education & Study</Link>
                        <Link to="/templates?category=Finance" className="category-pill">Personal Finance</Link>
                        <Link to="/templates?category=Lifestyle" className="category-pill">Lifestyle & Travel</Link>
                        <Link to="/templates?category=Family" className="category-pill">Family & Parenting</Link>
                    </div>
                </section>

                <section className="section newsletter-cta">
                    <div className="newsletter-card">
                        <h3>Get New Templates in Your Inbox</h3>
                        <p>Join 10,000+ others who receive our weekly organization tips and new free printables.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" aria-label="Email address" required />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                        <p className="newsletter-note">Free forever. No spam, just value.</p>
                    </div>
                </section>

                <section className="section social-proof text-center">
                    <h2 className="mb-4">Why Users Love Us</h2>
                    <p className="lead mb-8" style={{ color: 'var(--text-soft)' }}>Join thousands of students, parents, and professionals who organize their lives with Print & Plan Lab.</p>
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">50k+</div>
                            <div className="stat-label">Monthly Downloads</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Pro Templates</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Free Forever</div>
                        </div>
                    </div>
                </section>

                <section className="section recent-guides">
                    <div className="section-header">
                        <h2 className="section-title">Helpful Guides</h2>
                        <Link to="/guides" className="view-all">All Guides &rarr;</Link>
                    </div>
                    <div className="guides-list">
                        <Link to="/guides/how-to-print-without-margins" className="guide-item">
                            <div className="guide-icon">🖨️</div>
                            <div className="guide-text">
                                <h4>How to print without margins (A4/Letter)</h4>
                                <p>Ensure your templates look perfect every time with these printer settings.</p>
                            </div>
                        </Link>
                        <Link to="/guides/how-to-use-printables-on-ipad" className="guide-item">
                            <div className="guide-icon">📱</div>
                            <div className="guide-text">
                                <h4>How to use printables on iPad (GoodNotes/Notability)</h4>
                                <p>Transition to digital planning with our easy setup guide.</p>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
