const { chromium, firefox, webkit } = require('@playwright/test');

// Unit tests for the browser launching module
describe('Browser Launch Tests', () => {
    it('should launch Chromium browser', async () => {
        const browser = await chromium.launch();
        expect(browser).toBeDefined();
        await browser.close();
    });

    it('should launch Firefox browser', async () => {
        const browser = await firefox.launch();
        expect(browser).toBeDefined();
        await browser.close();
    });

    it('should launch WebKit browser', async () => {
        const browser = await webkit.launch();
        expect(browser).toBeDefined();
        await browser.close();
    });

    it('should handle errors when launching an invalid browser', async () => {
        await expect(async () => await launchInvalidBrowser()).rejects.toThrow();
    });
});