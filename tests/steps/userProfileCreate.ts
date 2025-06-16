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

Then(/^the form features (\d+) input fields and a submit button$/, async function (expectedNumInputs: number) {
    expect(await userProfilePage.isFormSubmitPresent()).toBe(true);
    expect(await userProfilePage.getNumberOfInputs()).toEqual(expectedNumInputs);
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

Then(/^the form features relevant labels for each field:$/, async function (expectedFieldLabels: DataTable) {   
    for (const row of expectedFieldLabels.rows()) {
        let expectedField = row[0];
        let expectedLabel = row[1];
        if (expectedField == 'Field') return; // Header row

        let actualFieldLabel: Locator|undefined = await userProfilePage.getFormFieldElement(expectedField, '_LABEL');
        expect(actualFieldLabel).toBeDefined();
        expect(await actualFieldLabel?.isVisible()).toBe(true);

        let actualFieldLabelText = await actualFieldLabel?.innerText();
        expect(actualFieldLabelText?.startsWith(expectedLabel)).toBe(true);
    }
});
