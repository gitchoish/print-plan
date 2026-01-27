import React from 'react';
import SEO from '../components/seo/SEO';

const Terms = () => {
    return (
        <>
            <SEO title="Terms of Service" description="Terms of Service for Print & Plan Lab. Understand the rules for using our site and templates." />

            <div className="container py-16">
                <div className="policy-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1>Terms of Service</h1>
                    <p className="last-updated">Last Updated: January 27, 2026</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>By accessing or using our Site, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Site.</p>

                    <h2>2. Intellectual Property</h2>
                    <p>The Site and its original content, features, and functionality (including all printable templates) are and will remain the exclusive property of Print & Plan Lab. Our templates are protected by copyright and other laws. Unauthorized use of our designs without proper attribution or for commercial gain is prohibited.</p>

                    <h2>3. Personal Use License</h2>
                    <p>When you download a template from Print & Plan Lab, we grant you a limited, non-exclusive, non-transferable license to use the template for your personal, non-commercial use only. You may:</p>
                    <ul>
                        <li>Print as many copies as you need for your household.</li>
                        <li>Use the templates in digital planning apps (e.g., GoodNotes, Notability).</li>
                    </ul>
                    <p>You may <strong>NOT</strong>:</p>
                    <ul>
                        <li>Resell or redistribute the digital files or printed copies on your own website, Etsy, or Pintreset.</li>
                        <li>Claim the designs as your own by removing our branding.</li>
                        <li>Use the templates for commercial projects or clinical advice.</li>
                    </ul>

                    <h2>4. Limitation of Liability</h2>
                    <p>In no event shall Print & Plan Lab be liable for any indirect, incidental, or consequential damages resulting from your use of our templates or advice found in our guides.</p>

                    <h2>5. Governing Law</h2>
                    <p>These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.</p>
                </div>
            </div>
        </>
    );
};

export default Terms;
