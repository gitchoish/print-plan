import React, { useState } from 'react';
import SEO from '../components/seo/SEO';
import './ChecklistBuilder.css';

const ChecklistBuilder = () => {
    const [title, setTitle] = useState('My Custom Checklist');
    const [items, setItems] = useState([
        { id: 1, text: 'Morning stretch', completed: false },
        { id: 2, text: 'Hydrate with 500ml water', completed: false },
        { id: 3, text: 'Review today\'s Top 3 priorities', completed: false }
    ]);
    const [newItem, setNewItem] = useState('');

    const addItem = (e) => {
        e.preventDefault();
        if (!newItem.trim()) return;
        setItems([...items, { id: Date.now(), text: newItem, completed: false }]);
        setNewItem('');
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const toggleItem = (id) => {
        setItems(items.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
    };

    const clearCompleted = () => {
        setItems(items.filter(item => !item.completed));
    };

    const printChecklist = () => {
        window.print();
    };

    return (
        <>
            <SEO title="Custom Checklist Builder" description="Create and print your own personalized checklists for free. No account required." />

            <div className="container py-16 no-print">
                <div className="builder-header text-center mb-12">
                    <h1>Checklist Builder</h1>
                    <p style={{ color: 'var(--text-soft)' }}>Create your own custom list, then print it out for your planner or fridge.</p>
                </div>

                <div className="builder-container card">
                    <div className="builder-main">
                        <input
                            className="builder-title-input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter Checklist Title..."
                        />

                        <ul className="builder-list">
                            {items.map(item => (
                                <li key={item.id} className={item.completed ? 'builder-item completed' : 'builder-item'}>
                                    <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onChange={() => toggleItem(item.id)}
                                    />
                                    <span>{item.text}</span>
                                    <button className="remove-btn" onClick={() => removeItem(item.id)} aria-label="Remove">&times;</button>
                                </li>
                            ))}
                        </ul>

                        <form className="add-item-form" onSubmit={addItem}>
                            <input
                                type="text"
                                placeholder="Add a new task..."
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>

                    <div className="builder-sidebar">
                        <button onClick={printChecklist} className="btn btn-primary btn-lg w-full mb-4">Print Checklist</button>
                        <button onClick={clearCompleted} className="btn btn-outline w-full mb-4">Clear Completed</button>
                        <button onClick={() => setItems([])} className="btn btn-outline w-full text-danger">Reset All</button>

                        <div className="builder-tip card mt-8" style={{ background: 'var(--surface)', fontSize: '0.875rem' }}>
                            <strong>Tip:</strong> You can use this builder to create daily routines, packing lists, or grocery lists. After printing, laminate it to use with a dry-erase marker!
                        </div>
                    </div>
                </div>
            </div>

            {/* Print-only version */}
            <div className="print-only">
                <div className="print-header">
                    <div className="print-site-logo">Print & Plan Lab</div>
                    <h1>{title}</h1>
                    <div className="print-date">Date: ____________________</div>
                </div>
                <ul className="print-list">
                    {items.map(item => (
                        <li key={item.id}>
                            <div className="print-checkbox"></div>
                            <span>{item.text}</span>
                        </li>
                    ))}
                    {[...Array(Math.max(0, 15 - items.length))].map((_, i) => (
                        <li key={i}>
                            <div className="print-checkbox"></div>
                            <div className="print-line"></div>
                        </li>
                    ))}
                </ul>
                <div className="print-footer">
                    Downloaded from www.printplanlab.com | For personal use only.
                </div>
            </div>
        </>
    );
};

export default ChecklistBuilder;
