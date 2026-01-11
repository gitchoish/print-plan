import React, { useEffect } from 'react';
import './AdSlot.css';

const AdSlot = ({ position, className = '' }) => {
    // Toggle this to true once AdSense code is ready
    const isEnabled = false;
    
    // Your AdSense Publisher ID (without "ca-pub-" prefix)
    const ADSENSE_PUBLISHER_ID = 'XXXXXXXXXXXXXXXX';
    
    // Ad slot configurations by position
    const adConfigs = {
        header: {
            slot: 'XXXXXXXXXX',
            format: 'auto',
            responsive: true,
        },
        sidebar: {
            slot: 'XXXXXXXXXX',
            format: 'vertical',
            width: 300,
            height: 250,
        },
        footer: {
            slot: 'XXXXXXXXXX',
            format: 'horizontal',
            width: 728,
            height: 90,
        },
        inline: {
            slot: 'XXXXXXXXXX',
            format: 'auto',
            responsive: true,
        },
    };

    const config = adConfigs[position] || adConfigs.inline;

    useEffect(() => {
        if (isEnabled && window.adsbygoogle) {
            try {
                window.adsbygoogle.push({});
            } catch (e) {
                console.warn('AdSense error:', e);
            }
        }
    }, [isEnabled]);

    if (!isEnabled) {
        return (
            <div className={`ad-slot-placeholder ${position} ${className}`}>
                <div className="ad-label">📢 Advertisement Space</div>
                <div className="ad-info">Position: {position} ({config.format})</div>
                <div className="ad-note">This slot will display ads after Google AdSense approval.</div>
            </div>
        );
    }

    // Production AdSense code
    return (
        <div className={`ad-slot ${position} ${className}`}>
            <ins
                className="adsbygoogle"
                style={{
                    display: 'block',
                    ...(config.width && { width: config.width }),
                    ...(config.height && { height: config.height }),
                }}
                data-ad-client={`ca-pub-${ADSENSE_PUBLISHER_ID}`}
                data-ad-slot={config.slot}
                data-ad-format={config.format}
                data-full-width-responsive={config.responsive}
            />
        </div>
    );
};

export default AdSlot;

