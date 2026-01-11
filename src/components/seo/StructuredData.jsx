import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type, data }) => {
    let schema = null;

    if (type === 'Article') {
        schema = {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": data.title,
            "image": [data.image],
            "datePublished": data.createdAt,
            "dateModified": data.updatedAt,
            "author": [{
                "@type": "Person",
                "name": "Print & Plan Lab Team",
                "url": "https://printplanlab.com/about"
            }]
        };
    } else if (type === 'HowTo' && data.steps) {
        schema = {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": data.title,
            "description": data.description,
            "image": data.image,
            "step": data.steps.map(step => ({
                "@type": "HowToStep",
                "text": step
            }))
        };
    } else if (type === 'Product') {
        schema = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": data.title,
            "image": data.image,
            "description": data.description,
            "brand": {
                "@type": "Brand",
                "name": "Print & Plan Lab"
            },
            "offers": {
                "@type": "Offer",
                "url": data.url,
                "priceCurrency": "USD",
                "price": "0.00",
                "availability": "https://schema.org/InStock"
            },
            "category": data.category
        };
    }

    if (!schema) return null;

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
