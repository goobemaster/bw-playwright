import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from 'playwright';
import { UserProfileCreationPage } from '../pages/UserProfileCreationPage';

const baseUrl: string = 'https://qa-assessment.pages.dev/';

let browser: Browser;
let context: BrowserContext;
let page: Page;

let userProfilePage: UserProfileCreationPage;

setDefaultTimeout(15 * 1000);

Before (async () => {
    // if (browser !== undefined) return page;

    try {
        browser = await chromium.launch({headless: false});
        //if (browser === undefined) browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('about:blank');
        console.info(`Page title after navigation: ${await page.title()}`);

        userProfilePage = new UserProfileCreationPage(page, context);
    } catch (error) {
        const navigationErrorMessage = `Chrome failed to navigate to the page: ${error}`;
        console.error(navigationErrorMessage);
        throw new Error(navigationErrorMessage);
    }
    //return page;
});

After (async () => {
    //await browser.close();
    //await context.close();
    //await browser.close();
});

export {
    browser, context, page, baseUrl,
    userProfilePage
};