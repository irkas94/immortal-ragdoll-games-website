const synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const flowBuilderBlueprint = async function () {
    let synthetics_configuration = synthetics.getConfiguration();
    synthetics_configuration.setConfig({
        screenshotOnStepStart: true,
        screenshotOnStepSuccess: true,
        screenshotOnStepFailure: true,
        includeRequestHeaders: true,
        includeResponseHeaders: true
    });

    let page = await synthetics.getPage();

    // Step 1: Homepage load with full screenshot
    await synthetics.executeStep('loadHomepage', async function () {
        await page.goto('https://d2jntjhquosg39.cloudfront.net', {
            waitUntil: 'networkidle0',
            timeout: 30000
        });
        
        await page.waitForSelector('h1', { timeout: 10000 });
        await page.screenshot({ fullPage: true });
        log.info('Homepage loaded');
    });

    // Step 2: Mobile viewport test
    await synthetics.executeStep('testMobileView', async function () {
        await page.setViewport({ width: 375, height: 667 });
        await page.reload({ waitUntil: 'networkidle0' });
        await page.screenshot({ fullPage: true });
        log.info('Mobile view captured');
    });

    // Step 3: Performance metrics
    await synthetics.executeStep('collectMetrics', async function () {
        const metrics = await page.evaluate(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            const paint = performance.getEntriesByType('paint');
            
            return {
                loadTime: navigation.loadEventEnd - navigation.loadEventStart,
                firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
                timestamp: new Date().toISOString()
            };
        });
        
        await synthetics.addUserAgentMetric('loadTime', metrics.loadTime);
        await synthetics.addUserAgentMetric('firstContentfulPaint', metrics.firstContentfulPaint);
        log.info('Metrics collected:', JSON.stringify(metrics));
    });

    // Step 4: UI validation
    await synthetics.executeStep('validateUI', async function () {
        const brokenImages = await page.evaluate(() => {
            const images = Array.from(document.querySelectorAll('img'));
            return images.filter(img => !img.complete || img.naturalWidth === 0).length;
        });
        
        if (brokenImages > 0) {
            throw new Error(`${brokenImages} broken images found`);
        }
        
        log.info('UI validation passed');
    });
};

exports.handler = async () => {
    return await synthetics.executeStep('immortalRagdollUIMonitoring', flowBuilderBlueprint);
};