import { BasePage } from '../src/BasePage';
import { Element } from '../src/Element';
import { Page, BrowserContext } from 'playwright';

export class UserProfileCreationPage extends BasePage {
    //protected static instance = new UserProfileCreationPage();
    public openUrl: string = '';
    public landUrl: RegExp = /^$/;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        let formName = 'form[name=profileForm]';
        this.elements[Element.FIRST_FORM_ANY] = page.locator('body > form');
        this.elements[Element.FIRST_FORM_ANY_SUBMIT] = page.locator('body > form > input[type=submit]');

        this.elements[Element.USER_PROFILE_CREATION_TITLE] = page.locator('body > h1');
        this.elements[Element.UPC_FIRST_NAME] = page.locator(`${formName} #firstName`);
        this.elements[Element.UPC_LAST_NAME] = page.locator(`${formName} #lastName`);
        this.elements[Element.UPC_EMAIL] = page.locator(`${formName} #email`);
        this.elements[Element.UPC_PASSWORD] = page.locator(`${formName} #password`);
        this.elements[Element.UPC_CONFIRM_PASSWORD] = page.locator(`${formName} #confirmPassword`);
        this.elements[Element.UPC_GENDER_MALE] = page.locator(`${formName} [name=gender]#male`);
        this.elements[Element.UPC_GENDER_FEMALE] = page.locator(`${formName} [name=gender]#female`);
        this.elements[Element.UPC_GENDER_UNDISCLOSED] = page.locator(`${formName} [name=gender]#preferNotToSay`);
        this.elements[Element.UPC_DATE_OF_BIRTH] = page.locator(`${formName} #dob`);
        this.elements[Element.UPC_PHONE_NUMBER] = page.locator(`${formName} #phone`);
        this.elements[Element.UPC_ADDRESS] = page.locator(`${formName} #address`);
        this.elements[Element.UPC_LINKEDIN] = page.locator(`${formName} #linkedIn`);
        this.elements[Element.UPC_GITHUB] = page.locator(`${formName} #github`);
        this.elements[Element.UPC_SUBMIT] = page.locator(`${formName} input[type=submit]`);
    }

    public async getPageTitle(): Promise<String> {
        let title = await this.getElement(Element.USER_PROFILE_CREATION_TITLE);
        return title === undefined ? '' : title.innerText();
    }

    public async isFormPresent(): Promise<Boolean> {
        let form = await this.getElement(Element.FIRST_FORM_ANY);
        return form !== undefined;
    }

    public async isFormSubmitPresent(): Promise<Boolean> {
        let form = await this.getElement(Element.FIRST_FORM_ANY_SUBMIT);
        return form !== undefined;
    }

    // public async isRedirectBannerDisplayed(): Promise<boolean> {
    //     let banner = await this.getElement(Element.REDIRECT_BANNER);
    //     return banner === undefined ? false : banner.isVisible();
    // }

    // public async isRedirectBannerLinkUrl(urlPartial: string): Promise<boolean> {
    //     let banner = await this.getElement(Element.REDIRECT_BANNER);
    //     return banner !== undefined && await banner.locator(`a[href*="${urlPartial}"]`).isVisible();
    // }
}