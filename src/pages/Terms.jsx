import React from 'react';
import SEO from '../components/seo/SEO';

const Terms = () => {
    return (
        <>
            <SEO title="Terms of Service" description="Terms of Service for Print & Plan Lab. Understand the rules for using our site and templates." />

            <div className="container py-16">
                <div className="policy-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1>Terms of Service</h1>
                    <p className="last-updated">Last Updated: January 9, 2026</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>By accessing or using our Site, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Site.</p>

                    <h2>2. Intellectual Property</h2>
                    <p>The Site and its original content, features, and functionality (including all printable templates) are and will remain the exclusive property of Print & Plan Lab. Our templates are protected by copyright and other laws of both the United States and foreign countries.</p>

                    <h2>3. Personal Use License</h2>
                    <p>When you download a template from Print & Plan Lab, we grant you a limited, non-exclusive, non-transferable license to use the template for your personal, non-commercial use only. You may:</p>
                    <ul>
                        <li>Print as many copies as you need for your household.</li>
                        <li>Use the templates in digital planning apps (e.g., GoodNotes).</li>
                    </ul>
                    <p>You may <strong>NOT</strong>:</p>
                    <ul>
                        <li>Resell or redistribute the digital files or printed copies.</li>
                        <li>Claim the designs as your own.</li>
                        <li>Use the templates for commercial projects without a specific commercial license.</li>
                    </ul>

                    <h2>4. User Content</h2>
                    <p>Our Site may allow you to post comments or send messages. You are responsible for the content you post and must ensure it does not violate any laws or the rights of others.</p>

                    <h2>5. Limitation of Liability</h2>
                    <p>In no event shall Print & Plan Lab be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Site.</p>

                    <h2>6. Changes</h2>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice before any new terms taking effect.</p>
                </div>
            </div>
        </>
    );
};

export default Terms;
