import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import guidesData from '../data/guides.json';
import './Guides.css';

const Guides = () => {
    return (
        <>
            <SEO
                title="Expert Organization & Productivity Guides"
                description="Learn how to master your routines, organize your home, and get the most out of your printables with our expert guides."
            />

            <div className="container py-16">
                <div className="list-header text-center mb-16">
                    <h1 className="list-title">Master Your Life with Our Guides</h1>
                    <p className="list-subtitle mx-auto">
                        From technical setup to psychological hacks, our guides provide the knowledge you need to turn plans into progress.
                    </p>
                </div>

                <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
                    {guidesData.map(guide => (
                        <Link key={guide.id} to={`/guides/${guide.slug}`} className="card guide-card-link">
                            <div className="card-image">
                                <img src={guide.heroImage} alt={guide.title} />
                                <span className="card-category">{guide.category}</span>
                            </div>
                            <div className="card-content">
                                <h3 className="card-title">{guide.title}</h3>
                                <p className="card-description">{guide.description}</p>
                                <span className="read-more">Read Guide &rarr;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Guides;
