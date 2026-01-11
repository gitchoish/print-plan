import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '../public/printables/descriptions');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const descriptions = {
    "weekly-cleaning-checklist": `
keep your home sparkling clean and organized with this comprehensive Weekly Cleaning Checklist. Designed for busy individuals and families, this printable template breaks down your cleaning tasks into manageable daily chunks, ensuring no corner is left untouched. The layout features a clear Monday-through-Sunday grid, giving you dedicated space to track daily chores.

A unique feature of this checklist is the "Deep Cleaning Zones" section, which rotates weekly to help you tackle larger projects without feeling overwhelmed. Whether it's decluttering the pantry or washing curtains, you can plan it out systematically. There's also a spacious "Notes" area for reminders or shopping lists for cleaning supplies.

The minimalist, ink-friendly design ensures it looks great on any printer while saving you money on ink. Print one for each week of the month and hang it on your fridge or command center to keep the whole family accountable. Say goodbye to chaotic cleaning marathons and hello to a consistently tidy home with this essential organization tool.
    `,
    "monthly-home-reset-plan": `
Master your household maintenance with the Monthly Home Reset Plan. This printable is your ultimate guide to starting every month refreshed and organized. Instead of trying to do everything at once, this planner divides the month into four manageable weeks, each with a specific focus to keep your home running smoothly.

The template categorizes tasks into three key areas: Declutter, Deep Clean, and Maintenance. This structure helps you balance daily tidying with important long-term upkeep like checking smoke detectors or changing filters. The vertical "Week" labels allow for easy scanning, while the checklist format provides that satisfying feeling of accomplishment as you mark off items.

Perfect for homeowners and renters alike, this grayscale, distraction-free design focuses purely on functionality. It prints perfectly on A4 or Letter paper. Use this reset plan to build a sustainable routine that prevents clutter from accumulating and ensures your living space remains a sanctuary of peace and order throughout the year.
    `,
    "morning-routine-tracker": `
Transform your mornings and supercharge your productivity with this Morning Routine Tracker. "Win the morning, win the day" is the philosophy behind this layout, designed to help you build positive habits from the moment you wake up.

The tracker is split into two powerful sections. The left side features a timeline from 5:00 AM to 9:00 AM, allowing you to time-block your crucial first hours. Whether it's meditation, exercise, or a healthy breakfast, you can schedule it efficiently. The "Priorities" section ensures you identify your top 3 goals before the day gets busy.

On the right, the "Habit Stack" grid lets you track key behaviors like hydration, reading, or journaling over a full week. Seeing your streak build up provides visual motivation to keep going. Clean, professional, and minimal, this tracker is the tool you need to stop hitting snooze and start intentional living. Download it now and take control of your AM routine.
    `,
    "night-routine-tracker": `
End your day with intention using the Night Routine Tracker. A good morning starts the night before, and this template is designed to help you wind down, reflect, and prepare for a restful sleep.

The "Wind Down Routine" checklist guides you through essential evening steps, from skincare to planning the next day, promoting better sleep hygiene. A dedicated "Digital Detox" section encourages you to log your last phone usage, helping you break the habit of doom-scrolling before bed.

The right side focuses on gratitude and reflection. Answering simple questions like "What went well today?" and "What can be improved?" facilitates continuous personal growth. The "Brain Dump" area is perfect for clearing your mind of lingering thoughts so you can sleep peacefully. With an elegant, ink-saving design, this printable is your bedside companion for a better night's rest and a brighter tomorrow.
    `,
    "30-day-habit-tracker": `
Build lasting habits one day at a time with this 30-Day Habit Tracker. Whether you want to start exercising, drink more water, or learn a new skill, this visual tool is the accountability partner you need.

The template features three distinct habit blocks, allowing you to focus on up to three new behaviors simultaneously without getting overwhelmed. Each block tracks a full 30-day cycle with a clear grid to mark your progress. There are fields for your "Start Date" and a promised "Reward," giving you an extra incentive to reach the finish line.

The clean, grid-based layout is designed for clarity and focus, free from unnecessary decorations. It looks professional and prints crisply in black and white. Hang it where you'll see it every day—like your bathroom mirror or office wall—and watch your consistency grow. Start your journey to self-improvement today with this effective habit tracking solution.
    `,
    "weekly-study-planner": `
Ace your exams and manage your coursework effectively with the Weekly Study Planner. Designed specifically for students who need to balance multiple subjects, assignments, and extracurriculars, this planner is your roadmap to academic success.

The core of the template is a Mon-Sun schedule that lets you map out study sessions for different subjects. The "Focus Hours" section encourages deep work, allowing you to track uninterrupted study blocks essential for mastering complex topics. There's also a high-priority "Exams / Deadlines" box to ensure you never miss a critical date.

With its structured yet flexible layout, this planner adapts to high school or university schedules. The minimalist design ensures that your study content stands out, not the background graphics. Print a fresh copy every Sunday to map out your week, reduce exam stress, and study smarter, not harder.
    `,
    "exam-countdown-plan": `
Don't let exam season catch you off guard. The Exam Countdown Plan is a strategic tool designed to help you prepare effectively in the critical 30 days leading up to a test. It breaks down the daunting month-long period into four actionable weeks.

The "D-30 Plan" structure guides you through different phases of study: Concept Review, Deep Dive, Mock Exams, and Final Revision. This phased approach ensures you cover all material thoroughly and have time for practice. The "Last Minute Checklist" is a lifesaver, reminding you of essentials like your ID, calculator, and stationery for exam day.

This template is distraction-free and focuses entirely on your study strategy. Use it to visualize your timeline, allocate time for weak subjects, and enter the exam hall with confidence. It's the ultimate printable resource for organized, stress-free exam preparation.
    `,
    "meal-planner-grocery-list": `
Simplify your kitchen routine with this all-in-one Meal Planner and Grocery List. Planning your meals in advance is the secret to saving money, eating healthier, and reducing food waste. This template brings organization to your dining table.

The layout features a clear weekly grid for Breakfast, Lunch, and Dinner, helping you answer the dreaded "what's for dinner?" question before it's even asked. The adjacent Grocery List is categorized into Produce, Protein/Dairy, Pantry, and Other. This smart layout means you can plan your meals and immediately add ingredients to your shopping list, streamlining your trip to the store.

Designed with a clean, functional aesthetic, this printable looks great on your fridge. It facilitates better nutrition choices and budgeting by preventing impulse buys. Download this essential kitchen tool to take the stress out of cooking and enjoy more family time.
    `,
    "pantry-inventory-sheet": `
Stop buying duplicates and letting food expire with the Pantry Inventory Sheet. This organizational tool gives you a clear snapshot of what you have on hand, making meal planning and shopping significantly more efficient.

The sheet is divided into key categories like Canned Goods, Grains/Pasta, Spices, and Snacks. Each row includes columns for Item, Quantity, Expiry Date, and a "Restock?" checkbox. This level of detail helps you rotate your stock, use up ingredients before they go bad, and know exactly what you're running low on at a glance.

Ideal for managing a deep pantry or emergency food supply, this template is designed for utility. print it out and keep it on a clipboard in your pantry or cupboard door. Update it as you use items to maintain a perfectly organized kitchen inventory system that saves you both time and money.
    `,
    "moving-checklist": `
Moving house is one of life's most stressful events, but the Ultimate Moving Checklist is here to keep you on track. This comprehensive timeline guides you through every stage of the relocation process, ensuring nothing gets forgotten in the chaos.

The checklist is broken down into three critical phases: 4-6 Weeks Before (Planning), 1-2 Weeks Before (Utilities & Packing), and Moving Day (Execution). It covers everything from booking movers and transferring internet service to packing an "essentials box" for your first night. There's also space for important contacts and notes.

Designed to be your moving bible, this printable reduces anxiety by giving you a clear roadmap. The professional, checklist-style format makes it easy to track progress. whether you're moving across town or across the country, this template is the organization tool you need for a smooth, successful transition to your new home.
    `,
    "travel-packing-checklist": `
Pack smarter and travel stress-free with this Travel Packing Checklist. Whether you're heading on a weekend getaway or a month-long expedition, this list ensures you have everything you need without overpacking.

The template organizes items into logical categories: Clothes, Toiletries, Electronics, Documents, and Carry-On. This categorization prevents the "did I forget my charger?" panic. The "Final House Check" section is a unique bonus, reminding you to water plants, lock doors, and turn off appliances before you leave, giving you total peace of mind.

With its ample space for custom items and clear, readable font, this checklist is adaptable to any type of trip. Print a copy for each traveler to ensure everyone is prepared. Light, organized, and thorough, it's the perfect companion for the savvy traveler.
    `,
    "simple-expense-tracker": `
Take control of your finances with the Simple Expense Tracker. This user-friendly printable is designed for anyone who wants to monitor their spending habits without complex software or spreadsheets.

The layout provides a straightforward table to log the Date, Category, Description, and Amount of every purchase. At the bottom, a "Monthly Summary" box allows you to calculate totals for Income, Fixed Expenses, and Variable Expenses, giving you a clear picture of your net savings for the month.

The "no financial advice" disclaimer keeps it professional and focused on tracking. Its clean, grayscale design makes it easy to read and use daily. consistently using this tracker can reveal spending patterns and help you budget more effectively. Start your journey to financial wellness today with this practical, pen-and-paper solution.
    `,
    "project-todo-board": `
Visualize your workflow and boost team productivity with the Project To-Do Board. Inspired by the Kanban method, this printable template turns your tasks into a clear, manageable visual system.

The board is divided into three classic columns: "To Do / Backlog," "In Progress," and "Completed." This flow allows you to see exactly where every task stands at a glance. Each "task card" area includes a priority indicator, letting you circle the urgency level. It's perfect for tracking personal projects, freelance work, or small team assignments.

This analog version of a digital board offers a tangible satisfaction that apps can't match. moving a task to the "Completed" column is a rewarding physical action. Simple, structured, and effective, this Project To-Do Board keeps you focused on execution and delivery.
    `,
    "content-calendar-creators": `
Streamline your creative process with the Content Calendar for Creators. Whether you're a blogger, YouTuber, or social media manager, this tool helps you plan, produce, and publish content consistently.

The calendar table acts as a central hub for your monthly schedule, with columns for Date, Platform, Content Title, and Status. The "Status" column features handy "Draft / Edit" pills you can circle to track progress. The bottom section includes areas for "Key Tasks" and "Metrics to Track," keeping your strategy aligned with your goals.

Designed for the modern creator, this template reduces the overwhelm of managing multiple platforms. By planning ahead, you can maintain a steady stream of high-quality content. Print this calendar to organize your ideas and keep your audience engaged and growing.
    `,
    "kids-chore-chart": `
Make chores fun and teach responsibility with the "Super Star" Kids Chore Chart. This engaging, kid-friendly template is designed to motivate children to help around the house while earning rewards.

The chart lists chores on the left and features a Mon-Sun grid where kids can draw a star, check a box, or add a sticker for each completed task. The "Goal" and "My Reward" sections at the bottom turn household help into a game with a clear prize, encouraging positive behavior and consistency.

With a playful yet clean design, it fits perfectly on a bedroom door or family fridge. It's large enough for kids to write on and simple enough for them to understand. Use this chart to build good habits, teach the value of work, and keep the house tidy—all with a positive attitude.
    `
};

for (const [key, value] of Object.entries(descriptions)) {
    const filename = `${key}.txt`;
    const cleanValue = value.trim();
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), cleanValue);
    console.log(`Generated description for: ${key}`);
}
