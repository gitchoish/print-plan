import React from 'react';
import SEO from '../components/seo/SEO';

const Disclaimer = () => {
    return (
        <>
            <SEO title="Disclaimer" description="Disclaimer for Print & Plan Lab. Understand the limitations of our content and templates." />

            <div className="container py-16">
                <div className="policy-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1>Disclaimer</h1>
                    <p className="last-updated">Last Updated: January 27, 2026</p>

                    <p>The information provided by Print & Plan Lab ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind regarding the accuracy, reliability, or completeness of any information on the Site.</p>

                    <h2>1. Professional Disclaimer</h2>
                    <p>The Site cannot and does not contain professional advice (including but not limited to medical, financial, or legal advice). The organization, cleaning, and planning information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.</p>

                    <h2>2. No Financial Advice</h2>
                    <p>Our financial trackers (e.g., Expense Tracker) are tools for record-keeping only. They do not constitute financial advice. We are not responsible for any financial decisions made based on the use of our templates.</p>

                    <h2>3. Affiliate & Ad Disclosure</h2>
                    <p>This Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. We are also a participant in the Google AdSense program. Using our links or viewing ads helps us keep our high-quality templates free for everyone.</p>

                    <h2>4. Limitation of Liability</h2>
                    <p>THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK. We shall have no liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site.</p>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;
