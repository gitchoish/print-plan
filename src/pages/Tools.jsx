import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const Tools = () => {
    return (
        <>
            <SEO title="Interactive Planning Tools" description="Free online tools to help you organize your life. Create custom checklists, timers, and trackers." />

            <div className="container py-16">
                <div className="text-center mb-16">
                    <h1 className="mb-4">Digital Tool Hub</h1>
                    <p className="lead mx-auto" style={{ maxWidth: '600px', color: 'var(--text-soft)' }}>
                        Go beyond static printables with our interactive digital tools designed to streamline your daily routines.
                    </p>
                </div>

                <div className="grid grid-cols-1 grid-cols-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="card tool-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>✍️</div>
                        <h3>Custom Checklist Builder</h3>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '1.5rem', flexGrow: 1 }}>
                            Build your own personalized checklist, organize tasks by priority, and print it out in a beautiful, clean format.
                        </p>
                        <Link to="/tools/checklist-builder" className="btn btn-primary">Open Builder</Link>
                    </div>

                    <div className="card tool-card disabled" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', opacity: 0.6, background: 'var(--surface)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>⏱️</div>
                        <h3>Pomodoro Focus Timer</h3>
                        <p style={{ color: 'var(--text-soft)', marginBottom: '1.5rem', flexGrow: 1 }}>
                            A distraction-free timer based on the Pomodoro technique. Coming Soon to help you master your study sessions.
                        </p>
                        <button className="btn btn-outline" disabled>Coming Soon</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tools;
