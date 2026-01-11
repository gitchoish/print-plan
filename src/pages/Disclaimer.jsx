import React from 'react';
import SEO from '../components/seo/SEO';

const Disclaimer = () => {
    return (
        <>
            <SEO title="Disclaimer" description="Disclaimer for Print & Plan Lab. Understand the limitations of our content and templates." />

            <div className="container py-16">
                <div className="policy-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1>Disclaimer</h1>
                    <p className="last-updated">Last Updated: January 9, 2026</p>

                    <p>The information provided by Print & Plan Lab ("we," "us," or "our") on printplanlab.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>

                    <h2>External Links Disclaimer</h2>
                    <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>

                    <h2>Professional Disclaimer</h2>
                    <p>The Site cannot and does not contain professional advice (including but not limited to medical, financial, or legal advice). The organization, cleaning, and planning information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>

                    <h2>Templates and Downloads</h2>
                    <p>All templates, checklists, and planners provided on this Site are for <strong>personal use only</strong>. You may not resell, redistribute, or use these templates for commercial purposes without prior written consent from Print & Plan Lab. While we strive to provide high-quality materials, we cannot guarantee that the templates will meet your specific requirements or be error-free.</p>

                    <h2>Affiliates and Advertising</h2>
                    <p>This Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. We are also a participant in the Google AdSense program, an advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Google properties.</p>
                    <p>We only recommend products or services that we believe will add value to our readers. Our participation in these programs does not influence the content of our guides or templates.</p>

                    <h2>Errors and Omissions</h2>
                    <p>While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Print & Plan Lab is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
                </div>
            </div>
        </>
    );
};

export default Disclaimer;
