import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_DIR = path.join(__dirname, 'templates');
const OUTPUT_DIR = path.join(__dirname, '../public/printables');

// Ensure output directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generate() {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const files = fs.readdirSync(TEMPLATE_DIR).filter(file => file.endsWith('.html'));

    console.log(`Found ${files.length} templates. Starting generation...`);

    for (const file of files) {
        const name = path.basename(file, '.html');
        const page = await browser.newPage();

        // Load the HTML file
        const fileUrl = `file://${path.join(TEMPLATE_DIR, file)}`;
        await page.goto(fileUrl, { waitUntil: 'networkidle0' });

        // Generate PDF (A4)
        await page.pdf({
            path: path.join(OUTPUT_DIR, `${name}.pdf`),
            format: 'A4',
            printBackground: true,
            margin: { top: '0', right: '0', bottom: '0', left: '0' } // Margins handled in CSS
        });

        // Generate PNG (Preview)
        await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 }); // A4 at 96 DPI approx
        await page.screenshot({
            path: path.join(OUTPUT_DIR, `${name}.png`),
            fullPage: true
        });

        console.log(`Query: ${name} - Generated PDF & PNG`);
        await page.close();
    }

    await browser.close();
    console.log('All templates processed successfully.');
}

generate().catch(console.error);
