import React from 'react';
import './AdSlot.css';

const AdSlot = ({ position, className = '' }) => {
    // In a real scenario, this would contain the AdSense <ins> tag
    // For now, we show a placeholder that is clearly marked for review

    const isEnabled = false; // Toggle this once AdSense code is ready

    if (!isEnabled) {
        return (
            <div className={`ad-slot-placeholder ${position} ${className}`}>
                <div className="ad-label">Advertisement</div>
                <div className="ad-info">Position: {position}</div>
                <div className="ad-note">This slot will be active after AdSense approval.</div>
            </div>
        );
    }

    // Example of what the real code would look like:
    /*
    return (
      <div className={`ad-slot ${position} ${className}`}>
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    );
    */

    return null;
};

export default AdSlot;
