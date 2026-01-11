import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import blogData from '../data/blog.json';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <SEO
                title="Planning & Routine Blog"
                description="Insights, tips, and deep dives into the world of organization, planning, and personal growth."
            />

            <div className="container py-16">
                <div className="list-header mb-16">
                    <h1 className="list-title">The Planner's Blog</h1>
                    <p className="list-subtitle">Thoughts and theories on how to live a more organized life.</p>
                </div>

                <div className="blog-stream">
                    {blogData.map(post => (
                        <article key={post.id} className="blog-post-item">
                            <div className="blog-item-image">
                                <img src={post.heroImage} alt={post.title} />
                            </div>
                            <div className="blog-item-content">
                                <span className="blog-item-category">{post.category}</span>
                                <h2 className="blog-item-title">
                                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="blog-item-excerpt">{post.description}</p>
                                <div className="blog-item-meta">
                                    <span>{new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    <span className="dot">•</span>
                                    <Link to={`/blog/${post.slug}`} className="read-link">Read Post &rarr;</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
