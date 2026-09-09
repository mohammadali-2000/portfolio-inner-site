const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const htmlPath = 'file://' + path.resolve('src/assets/resume/resume_template.html');
    await page.goto(htmlPath, {waitUntil: 'networkidle0'});
    // Ensure output directory exists
    const outputDir = path.resolve('src/assets/resume');
    fs.mkdirSync(outputDir, {recursive: true});
    // Generate PDF directly in the existing resume folder
    await page.pdf({
        path: path.join(outputDir, 'Syed_Mohammad_Ali_Resume.pdf'),
        format: 'Letter',
        printBackground: true,
        margin: {
            top: '0.35in',
            bottom: '0.35in',
            left: '0.45in',
            right: '0.45in'
        }
    });
    await browser.close();
    console.log('PDF generated successfully at', path.join(outputDir, 'Syed_Mohammad_Ali_Resume.pdf'));
})();
