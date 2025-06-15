import { Then, DataTable } from '@cucumber/cucumber';
import { userProfilePage } from './world';
import { expect, Locator } from '@playwright/test';

Then(/^the page title is: (.+)$/, async function (expectedPageTitle: string) {
    expect(await userProfilePage.getPageTitle()).toEqual(expectedPageTitle);
});

Then(/^the browser title is: (.+)$/, async function (expectedBrowserTitle: string) {
    expect(await userProfilePage.getBrowserTitle()).toEqual(expectedBrowserTitle);
});

Then(/^a form is present on the page$/, async function () {
    expect(await userProfilePage.isFormPresent()).toBe(true);
});

Then(/^the form features input fields and a submit button$/, async function () {
    expect(await userProfilePage.isFormSubmitPresent()).toBe(true);
});

Then(/^the form features the following input fields:$/, async function (expectedFields: DataTable) {   
    for (const row of expectedFields.rows()) {
        let expectedField = row[0];
        let expectedType = row[1];
        if (expectedField == 'Field') return; // Header row

        let actualField: Locator|undefined = await userProfilePage.getFormFieldElement(expectedField);
        expect(actualField).toBeDefined();
        expect(await actualField?.isVisible()).toBe(true);
        let actualFieldType = await actualField?.getAttribute('type');
        expect(actualFieldType?.toLowerCase()).toBe(expectedType.toLowerCase());
    }
});
