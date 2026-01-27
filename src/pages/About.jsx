import React from 'react';
import SEO from '../components/seo/SEO';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <SEO title="About Us" description="Learn about Print & Plan Lab, our mission to simplify organization, and how we create our high-quality printable templates." />

            <div className="container py-16">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="mb-8">About Print & Plan Lab</h1>

                    <div className="about-hero mb-12">
                        <p className="lead" style={{ fontSize: '1.25rem', color: 'var(--text-soft)', borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                            At Print & Plan Lab, we believe that effective organization is the foundation of a purposeful life. Our mission is to democratize high-quality productivity tools by providing professionally designed, science-backed templates to everyone—completely free of charge.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2>Our Core Mission</h2>
                        <p>We founded Print & Plan Lab with a simple observation: most productivity systems are either too complex or too expensive. We saw a need for a central repository of <strong>utility-first</strong> printables that remove the friction from daily home and work management.</p>
                        <p>Whether you are a student preparing for life-changing exams, a busy parent managing a household, or a creator building a digital empire, our tools are designed to provide the clarity you need to succeed.</p>
                    </section>

                    <section className="mb-12">
                        <h2>Our Design Philosophy (EEAT)</h2>
                        <p>Every resource we publish is created in-house following our strict standards for Excellence, Experience, Authoritativeness, and Trustworthiness:</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)' }}>
                                <strong>High Utility</strong>
                                <p style={{ fontSize: '0.9375rem', marginBottom: 0 }}>Every line and checkbox is placed with purpose to minimize cognitive load.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)' }}>
                                <strong>Psychology-Backed</strong>
                                <p style={{ fontSize: '0.9375rem', marginBottom: 0 }}>Our trackers use behavioral science principles like 'Habit Stacking' and 'Visual Momentum'.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)' }}>
                                <strong>Ink-Friendly</strong>
                                <p style={{ fontSize: '0.9375rem', marginBottom: 0 }}>We design for the home printer, ensuring high contrast without wasting your ink.</p>
                            </div>
                            <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)' }}>
                                <strong>No Gated Content</strong>
                                <p style={{ fontSize: '0.9375rem', marginBottom: 0 }}>We don't hide our files behind email walls. One click = one download.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12" style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
                        <h2>Transparency & Funding</h2>
                        <p>To keep our resources free and accessible to the world, Print & Plan Lab is funded through advertising and affiliate partnerships. Our commitment to you is that ads will never interfere with the primary function of our templates or the quality of our advice.</p>
                        <p>We are a small, independent team dedicated to the 'Open Productivity' movement. When you use our tools or share them with friends, you are supporting independent resource creators.</p>
                    </section>

                    <section className="text-center">
                        <h2>Join Our Community</h2>
                        <p>We are constantly expanding our library based on user feedback. Have an idea for a template?</p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-primary">Suggest a Template</Link>
                            <Link to="/templates" className="btn btn-outline">Explore All Templates</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default About;
