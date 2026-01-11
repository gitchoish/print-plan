import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages (to be created)
import Home from './pages/Home';
import Templates from './pages/Templates';
import TemplateDetail from './pages/TemplateDetail';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Tools from './pages/Tools';
import ChecklistBuilder from './pages/ChecklistBuilder';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Templates */}
                <Route path="/templates" element={<Templates />} />
                <Route path="/templates/:slug" element={<TemplateDetail />} />

                {/* Guides */}
                <Route path="/guides" element={<Guides />} />
                <Route path="/guides/:slug" element={<GuideDetail />} />

                {/* Blog */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />

                {/* Tools */}
                <Route path="/tools" element={<Tools />} />
                <Route path="/tools/checklist-builder" element={<ChecklistBuilder />} />

                {/* Categories & Tags */}
                <Route path="/category/:category" element={<Templates />} />
                <Route path="/tag/:tag" element={<Templates />} />

                {/* Legal & About */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
            </Routes>
        </Layout>
    );
}

export default App;
