import React, { useState } from 'react';
import SEO from '../components/seo/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <>
            <SEO title="Contact Us" description="Have a question or a template suggestion? Contact the team at Print & Plan Lab." />

            <div className="container py-16">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="text-center mb-8">Get In Touch</h1>
                    <p className="text-center mb-12" style={{ color: 'var(--text-soft)', fontSize: '1.125rem' }}>
                        We'd love to hear from you. Whether you have a question about our templates or a suggestion for a new guide, feel free to reach out.
                    </p>

                    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem' }}>
                        <div className="contact-info" style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '0.5rem' }}>Email Us Directly</h3>
                                <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.25rem' }}>csh9609@gmail.com</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>We typically respond within 24-48 business hours.</p>
                            </div>
                        </div>

                        <div className="contact-form-container" style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-md)' }}>
                            <form onSubmit={handleSubmit}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <div className="form-group">
                                        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                    <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}
                                        required
                                    />
                                </div>

                                <div className="form-group" style={{ marginBottom: '2rem' }}>
                                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', resize: 'vertical' }}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                                </button>

                                {status === 'success' && (
                                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#dcfce7', color: '#166534', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
