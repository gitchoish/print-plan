import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import TemplateCard from '../components/ui/TemplateCard';
import templatesData from '../data/templates.json';
import './Templates.css';

const Templates = () => {
    const { category, tag } = useParams();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTemplates = useMemo(() => {
        return templatesData.filter(template => {
            const matchesCategory = category ? template.category.toLowerCase() === category.toLowerCase() : true;
            const matchesTag = tag ? template.tags.some(t => t.toLowerCase() === tag.toLowerCase()) : true;
            const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                template.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesTag && matchesSearch;
        });
    }, [category, tag, searchQuery]);

    const categories = useMemo(() => {
        return Array.from(new Set(templatesData.map(t => t.category)));
    }, []);

    const pageTitle = category ? `${category} Templates` : tag ? `Templates tagged with "${tag}"` : 'All Printable Templates';

    return (
        <>
            <SEO
                title={pageTitle}
                description={`Browse our collection of free ${category || ''} printable templates, checklists, and planners. High-quality designs for home, work, and life.`}
                canonical={category ? `/category/${category}` : tag ? `/tag/${tag}` : '/templates'}
            />

            <div className="container py-16">
                <div className="list-header">
                    <h1 className="list-title">{pageTitle}</h1>
                    <p className="list-subtitle">
                        Premium quality printables for personal use. Download, print, and start organizing today.
                    </p>
                </div>

                <div className="filter-bar">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search templates..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search"
                        />
                    </div>
                    <div className="category-filters">
                        <Link to="/templates" className={!category ? 'filter-chip active' : 'filter-chip'}>All</Link>
                        {categories.map(cat => (
                            <Link
                                key={cat}
                                to={`/category/${cat}`}
                                className={category === cat ? 'filter-chip active' : 'filter-chip'}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>
                </div>

                {filteredTemplates.length > 0 ? (
                    <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
                        {filteredTemplates.map(template => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <h3>No templates found</h3>
                        <p>Try adjusting your search or filters.</p>
                        <Link to="/templates" className="btn btn-outline" onClick={() => setSearchQuery('')}>Clear All Filters</Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Templates;
