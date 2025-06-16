import { BasePage } from '../src/BasePage';
import { Element, getElementByName } from '../src/Element';
import { Page, BrowserContext, Locator } from 'playwright';

export class UserProfileCreationPage extends BasePage {
    public openUrl: string = '';
    public landUrl: RegExp = /^$/;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        let formName = 'form[name=profileForm]';
        this.elements[Element.FIRST_FORM_ANY] = page.locator('body > form');
        this.elements[Element.FIRST_FORM_ANY_SUBMIT] = page.locator('body > form > input[type=submit]');

        this.elements[Element.USER_PROFILE_CREATION_TITLE] = page.locator('body > h1');

        this.elements[Element.UPC_FIRST_NAME] = page.locator(`${formName} #firstName`);
        this.elements[Element.UPC_FIRST_NAME_LABEL] = page.locator(`${formName} label[for=firstName]`);

        this.elements[Element.UPC_LAST_NAME] = page.locator(`${formName} #lastName`);
        this.elements[Element.UPC_LAST_NAME_LABEL] = page.locator(`${formName} label[for=lastName]`);

        this.elements[Element.UPC_EMAIL] = page.locator(`${formName} #email`);
        this.elements[Element.UPC_EMAIL_LABEL] = page.locator(`${formName} label[for=email]`);

        this.elements[Element.UPC_PASSWORD] = page.locator(`${formName} #password`);
        this.elements[Element.UPC_PASSWORD_LABEL] = page.locator(`${formName} label[for=password]`);

        this.elements[Element.UPC_CONFIRM_PASSWORD] = page.locator(`${formName} #confirmPassword`);
        this.elements[Element.UPC_CONFIRM_PASSWORD_LABEL] = page.locator(`${formName} label[for=confirmPassword]`);

        this.elements[Element.UPC_GENDER_MALE] = page.locator(`${formName} [name=gender]#male`);
        this.elements[Element.UPC_GENDER_FEMALE] = page.locator(`${formName} [name=gender]#female`);
        this.elements[Element.UPC_GENDER_UNDISCLOSED] = page.locator(`${formName} [name=gender]#preferNotToSay`);
        this.elements[Element.UPC_GENDER_LABEL] = page.locator(`${formName} fieldset legend`);

        this.elements[Element.UPC_DATE_OF_BIRTH] = page.locator(`${formName} #dob`);
        this.elements[Element.UPC_DATE_OF_BIRTH_LABEL] = page.locator(`${formName} label[for=dob]`);

        this.elements[Element.UPC_PHONE_NUMBER] = page.locator(`${formName} #phone`);
        this.elements[Element.UPC_PHONE_NUMBER_LABEL] = page.locator(`${formName} label[for=phone]`);

        this.elements[Element.UPC_ADDRESS] = page.locator(`${formName} #address`);
        this.elements[Element.UPC_ADDRESS_LABEL] = page.locator(`${formName} label[for=address]`);

        this.elements[Element.UPC_LINKEDIN] = page.locator(`${formName} #linkedIn`);
        this.elements[Element.UPC_LINKEDIN_LABEL] = page.locator(`${formName} label[for=linkedIn]`);

        this.elements[Element.UPC_GITHUB] = page.locator(`${formName} #github`);
        this.elements[Element.UPC_GITHUB_LABEL] = page.locator(`${formName} label[for=github]`);

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

    public async getFormFieldElement(fieldName: String, postfix: String = ''): Promise<undefined|Locator> {
        let fieldNameElementKey = `UPC_` + fieldName.toUpperCase().replaceAll(' ', '_') + postfix;
        let fieldNameElement: Element|undefined = getElementByName(fieldNameElementKey) as Element;
        if (fieldNameElement === undefined) {
            console.error(fieldName + ' is an undefined form element!');
            return undefined;
        }
 
        return await this.getElement(fieldNameElement);
    }

    public async getNumberOfInputs(): Promise<Number> {
        let inputs = await this.page.locator('input').all();
        return inputs.length;
    }
}