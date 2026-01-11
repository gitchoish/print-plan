import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, type = 'website', image }) => {
    const siteTitle = 'Print & Plan Lab';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteUrl = 'https://print-plan.pages.dev';
    const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const defaultImage = `${siteUrl}/images/og-default.png`;
    const metaImage = image || defaultImage;

    return (
        <Helmet>
            {/* Basic Meta Tags - Essential for AdSense */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <link rel="canonical" href={fullUrl} />

            {/* Keywords */}
            <meta name="keywords" content="printable templates, checklists, planners, habit trackers, organization, productivity" />

            {/* Language */}
            <meta httpEquiv="content-language" content="en-US" />

            {/* Open Graph / Facebook - Essential for Social Sharing */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />

            {/* Additional SEO & AdSense Requirements */}
            <meta name="author" content="Print & Plan Lab" />
            <meta name="copyright" content="© 2024 Print & Plan Lab. All rights reserved." />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* Structured Data for Rich Snippets */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Print & Plan Lab",
                    "url": siteUrl,
                    "description": "Free printable templates for organization and productivity",
                    "sameAs": [
                        "https://www.instagram.com/printplanlab",
                        "https://www.facebook.com/printplanlab"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
