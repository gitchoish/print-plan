import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import StructuredData from '../components/seo/StructuredData';
import blogData from '../data/blog.json';
import './TemplateDetail.css';
import './Blog.css';

const BlogDetail = () => {
    const { slug } = useParams();
    const post = blogData.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="container py-16 text-center">
                <h1>Post Not Found</h1>
                <p>Sorry, the blog post you're looking for doesn't exist.</p>
                <Link to="/blog" className="btn btn-primary mt-4">Back to Blog</Link>
            </div>
        );
    }

    const handleShare = (platform) => {
        const url = window.location.href;
        const title = post.title;
        const text = post.description;

        if (platform === 'instagram' || platform === 'share') {
            if (navigator.share) {
                navigator.share({
                    title: title,
                    text: text,
                    url: url
                }).then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
                return;
            } else {
                navigator.clipboard.writeText(url);
                alert('Link copied to clipboard! You can now share it on Instagram.');
                return;
            }
        }

        let shareUrl = '';
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    return (
        <>
            <SEO
                title={post.title}
                description={post.description}
                type="article"
                image={post.heroImage}
                canonical={`/blog/${post.slug}`}
            />
            <StructuredData
                type="Article"
                data={{
                    title: post.title,
                    image: post.heroImage,
                    updatedAt: post.updatedAt,
                    author: "Print & Plan Lab Team"
                }}
            />

            <article className="template-detail blog-detail">
                <header className="detail-header">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div className="breadcrumbs">
                            <Link to="/">Home</Link> &rsaquo; <Link to="/blog">Blog</Link> &rsaquo; {post.category}
                        </div>
                        <h1 className="detail-title">{post.title}</h1>
                        <div className="detail-meta">
                            <span>{new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                            <span className="dot">•</span>
                            <span>{post.category}</span>
                        </div>
                    </div>
                </header>

                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="detail-main">
                        <img src={post.heroImage} alt={post.title} className="detail-hero-img" />

                        <div className="detail-body">
                            <div
                                className="content-render"
                                dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
                            />
                        </div>

                        <div className="blog-next-box" style={{ margin: '4rem 0', padding: '2rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ maxWidth: '70%' }}>
                                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Next Post</span>
                                <h4 style={{ margin: '0.25rem 0 0' }}><Link to={`/blog/${nextPost.slug}`}>{nextPost.title}</Link></h4>
                            </div>
                            <Link to={`/blog/${nextPost.slug}`} className="btn btn-outline btn-sm">Read Next</Link>
                        </div>

                        <section className="related-section">
                            <h3 className="section-title">Share this Post</h3>
                            <div className="share-links" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <button onClick={() => handleShare('facebook')} className="btn btn-sm" style={{ background: '#1877F2', color: 'white', border: 'none' }}>
                                    Facebook
                                </button>
                                <button onClick={() => handleShare('twitter')} className="btn btn-sm" style={{ background: '#1DA1F2', color: 'white', border: 'none' }}>
                                    Twitter
                                </button>
                                <button onClick={() => handleShare('instagram')} className="btn btn-sm" style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', color: 'white', border: 'none' }}>
                                    Instagram
                                </button>
                                <button onClick={() => handleShare('share')} className="btn btn-sm btn-outline">
                                    Copy Link
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogDetail;
