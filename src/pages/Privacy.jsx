import React from 'react';
import SEO from '../components/seo/SEO';

const Privacy = () => {
    return (
        <>
            <SEO title="Privacy Policy" description="Privacy Policy for Print & Plan Lab. Understand how we collect, use, and protect your information." />

            <div className="container py-16">
                <div className="policy-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last Updated: January 27, 2026</p>

                    <p>At Print & Plan Lab, we take your privacy seriously. This policy outlines the types of information we collect and how we protect it. We are 100% committed to keeping all our high-quality templates free without compromising your personal data.</p>

                    <h2>1. Information We Collect</h2>
                    <p>We do not require account registration to download our templates. We collect standard log files (IP addresses, browser type, ISP) to analyze site traffic and improve our user experience.</p>

                    <h2>2. Cookies & Advertising</h2>
                    <p>We use cookies to understand your preferences and serve relevant advertisements. Our primary advertising partner is <strong>Google AdSense</strong>. Google uses DART cookies to serve ads based on your visits to this site and others on the internet.</p>
                    <p>You can opt-out of the use of DART cookies by visiting the <a href="https://policies.google.com/technologies/ads">Google Ad and Content Network Privacy Policy</a>.</p>

                    <h2>3. Third-Party Links</h2>
                    <p>Our templates and blog posts may contain links to third-party websites (e.g., specialized supplies from Amazon). We are not responsible for the privacy practices of these outside sites.</p>

                    <h2>4. Data Security</h2>
                    <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access any details on our site.</p>

                    <h2>5. Contact Us</h2>
                    <p>If you have any questions regarding this privacy policy, you may contact us using the information on our <a href="/contact">Contact Page</a>.</p>
                </div>
            </div>
        </>
    );
};

export default Privacy;
