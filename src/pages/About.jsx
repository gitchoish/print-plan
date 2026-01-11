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

                    <div className="about-hero mb-8">
                        <p className="lead" style={{ fontSize: '1.25rem', color: 'var(--text-soft)', borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem' }}>
                            We believe that a well-organized life is a calmer, more productive life. Our mission is to provide high-quality, scientifically-backed organization tools to everyone for free.
                        </p>
                    </div>

                    <section className="mb-8">
                        <h2>Our Story</h2>
                        <p>Print & Plan Lab was founded by a team of productivity enthusiasts and designers who were tired of overly complex, expensive planning systems. We realized that sometimes, the best tools are the simplest ones—a piece of paper, a pen, and a clear plan.</p>
                        <p>What started as a small collection of cleaning checklists for friends and family has grown into a comprehensive library of resources covering everything from exam preparation to meal planning.</p>
                    </section>

                    <section className="mb-8">
                        <h2>How We Create Our Templates</h2>
                        <p>Every resource you find on this site follows our core design principles:</p>
                        <ul>
                            <li><strong>Utility First:</strong> Every element on the page must serve a purpose. We avoid "clutter" to keep you focused.</li>
                            <li><strong>Accessibility:</strong> Our designs are high-contrast and use clear typography to ensure they are easy to read and print.</li>
                            <li><strong>Adaptability:</strong> While our templates are ready to use, they are designed with enough flexibility to fit your unique lifestyle.</li>
                            <li><strong>Research-Backed:</strong> Our routine and habit trackers are based on established psychological principles of behavior change and habit formation.</li>
                        </ul>
                    </section>

                    <section className="mb-8" style={{ background: 'var(--surface)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <h2>Ad Transparency</h2>
                        <p>To keep all our templates 100% free for our users, we support our laboratory through carefully placed advertisements. We are committed to ensuring these ads never interfere with your ability to access or use our content.</p>
                        <p>We strictly avoid intrusive ad formats and only partner with reputable networks like Google AdSense. For more details on how we handle data, please see our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
                    </section>

                    <section>
                        <h2>Get in Touch</h2>
                        <p>Have a suggestion for a new template? Or just want to say hi? We'd love to hear from you!</p>
                        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                    </section>
                </div>
            </div>
        </>
    );
};

export default About;
