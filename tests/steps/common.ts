import { Given } from '@cucumber/cucumber';
import { page } from './world';
import { userProfilePage } from './world';

/**
 * Browser & Navigation
 */

Given(/^my browser reported location is within the EU$/, async function () {
    page.context().setGeolocation({
        latitude: 47.4813,
        longitude: 19.0479036
    });
});

Given(/^I am a visitor who just landed on the User Profile Creation page for the first time$/, async function () {
    await userProfilePage.open();

    await page.evaluate(() => {
        window.localStorage.clear();
        window.sessionStorage.clear();
    });
    page.context().clearCookies();

    await userProfilePage.reload();
});

Given(/^the page is fully loaded$/, async function () {
    await page.waitForLoadState('domcontentloaded');
});

