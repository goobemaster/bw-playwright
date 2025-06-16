import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, firefox, webkit, Page } from 'playwright';
import { UserProfileCreationPage } from '../pages/UserProfileCreationPage';

const baseUrl: string = 'https://qa-assessment.pages.dev/';

let browser: Browser;
let context: BrowserContext;
let page: Page;

let userProfilePage: UserProfileCreationPage;

setDefaultTimeout(15 * 1000);

Before(async () => {
    // Environment Variables   
    let envBrowser = process.env.BROWSER;
    if (envBrowser == null || (envBrowser != 'chromium' && envBrowser != 'firefox' && envBrowser != 'webkit')) envBrowser = 'chromium';

    let envBrowserHeadless = process.env.BROWSER_HEADLESS;
    if (envBrowserHeadless == null || (envBrowserHeadless != 'true' && envBrowserHeadless != 'false')) envBrowserHeadless = 'false';
    let envBrowserHeadlessBool = envBrowserHeadless == 'true' ? true : false;

    try {
        // Browser
        switch (envBrowser) {
            case 'chromium':
                browser = await chromium.launch({ headless: envBrowserHeadlessBool });
                break;
            case 'firefox':
                browser = await firefox.launch({ headless: envBrowserHeadlessBool });
                break;
            case 'webkit':
                browser = await webkit.launch({ headless: envBrowserHeadlessBool });
                break;
        }
        context = await browser.newContext();
        page = await context.newPage();
        page.once('load', (page: Page) => {
            console.log(`Page load occured! URL: ${page.url}, Title: ${page.title}`);
        });
        await page.goto('about:blank');

        console.log(`Started ${envBrowser} browser; headless: ${envBrowserHeadless}`);

        // Pages
        userProfilePage = new UserProfileCreationPage(page, context);
    } catch (error) {
        const setupErrorMessage = `Failed to set-up scenario: ${error}`;
        console.error(setupErrorMessage);
        throw new Error(setupErrorMessage);
    }
});

After(async () => {
    if (!page.isClosed()) await page.close();
    await context.close();
    if (browser.isConnected()) await browser.close();
});

export {
    browser, context, page, baseUrl,
    userProfilePage
};