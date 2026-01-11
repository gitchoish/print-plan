import React from 'react';
import { Link } from 'react-router-dom';
import './TemplateCard.css';

const TemplateCard = ({ template }) => {
    return (
        <div className="card template-card">
            <div className="card-image">
                <img src={template.heroImage} alt={template.title} />
                <span className="card-category">{template.category}</span>
            </div>
            <div className="card-content">
                <h3 className="card-title">{template.title}</h3>
                <p className="card-description">{template.description}</p>
                <Link to={`/templates/${template.slug}`} className="btn btn-primary card-btn">
                    View Template
                </Link>
            </div>
        </div>
    );
};

export default TemplateCard;
