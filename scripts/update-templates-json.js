import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATES_JSON = path.join(__dirname, '../src/data/templates.json');
const DESCRIPTIONS_DIR = path.join(__dirname, '../public/printables/descriptions');

const existingData = JSON.parse(fs.readFileSync(TEMPLATES_JSON, 'utf8'));

// Find the highest existing ID to increment from
const maxId = existingData.reduce((max, item) => Math.max(max, parseInt(item.id) || 0), 0);
let nextId = maxId + 1;

const newTemplates = [
    { slug: 'weekly-cleaning-checklist', title: 'Weekly Cleaning Checklist', category: 'Organization' },
    { slug: 'monthly-home-reset-plan', title: 'Monthly Home Reset Plan', category: 'Organization' },
    { slug: 'morning-routine-tracker', title: 'Morning Routine Tracker', category: 'Productivity' },
    { slug: 'night-routine-tracker', title: 'Night Routine Tracker', category: 'Productivity' },
    { slug: '30-day-habit-tracker', title: '30-Day Habit Tracker', category: 'Productivity' },
    { slug: 'weekly-study-planner', title: 'Weekly Study Planner', category: 'Education' },
    { slug: 'exam-countdown-plan', title: 'Exam Countdown Plan', category: 'Education' },
    { slug: 'meal-planner-grocery-list', title: 'Meal Planner + Grocery List', category: 'Lifestyle' },
    { slug: 'pantry-inventory-sheet', title: 'Pantry Inventory Sheet', category: 'Lifestyle' },
    { slug: 'moving-checklist', title: 'Ultimate Moving Checklist', category: 'Lifestyle' },
    { slug: 'travel-packing-checklist', title: 'Travel Packing Checklist', category: 'Lifestyle' },
    { slug: 'simple-expense-tracker', title: 'Simple Expense Tracker', category: 'Finance' },
    { slug: 'project-to-do-board', title: 'Project To-Do Board', category: 'Productivity' },
    { slug: 'content-calendar-for-creators', title: 'Content Calendar for Creators', category: 'Work' },
    { slug: 'kids-chore-chart', title: 'Kids Chore Chart', category: 'Family' },
];

const processedNewTemplates = newTemplates.map(t => {
    // Read description
    let description = '';
    const descPath = path.join(DESCRIPTIONS_DIR, `${t.slug}.txt`);
    // Handle potential filename mismatches or missing files
    let actualSlug = t.slug;
    if (t.slug === 'content-calendar-for-creators' && !fs.existsSync(descPath)) actualSlug = 'content-calendar-creators';

    // Retry reading
    try {
        description = fs.readFileSync(path.join(DESCRIPTIONS_DIR, `${actualSlug}.txt`), 'utf8');
    } catch (e) {
        console.log(`Warning: Description not found for ${t.slug}, using default.`);
        description = `Download this free printable ${t.title} to help organize your life.`;
    }

    return {
        id: nextId++,
        title: t.title,
        slug: t.slug,
        description: description.slice(0, 150) + '...', // Short description for cards
        body: `## About This Template\n\n${description}\n\n## How to Use\n1. Download the PDF file.\n2. Print on A4 or Letter paper.\n3. Start organizing!\n\n**Pro Tip:** Laminate this sheet to use it again and again with a whiteboard marker.`,
        category: t.category,
        heroImage: `/printables/${t.slug}.png`,
        downloadLinks: {
            pdf: `/printables/${t.slug}.pdf`,
            png: `/printables/${t.slug}.png`
        },
        tags: [t.category.toLowerCase(), 'printable', 'pdf', 'planning'],
        updatedAt: new Date().toISOString()
    };
});

// Merge: If slug exists, update; else push
const mergedData = [...existingData];

processedNewTemplates.forEach(newItem => {
    const customIndex = mergedData.findIndex(exist => exist.slug === newItem.slug);
    if (customIndex !== -1) {
        mergedData[customIndex] = { ...mergedData[customIndex], ...newItem, id: mergedData[customIndex].id }; // Keep existing ID
    } else {
        mergedData.push(newItem);
    }
});

fs.writeFileSync(TEMPLATES_JSON, JSON.stringify(mergedData, null, 2));
console.log(`Updated templates.json with ${processedNewTemplates.length} items.`);
