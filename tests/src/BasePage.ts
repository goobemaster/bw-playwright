import { BrowserContext, Locator, Page } from '@playwright/test';
import { Element } from './Element';
import { baseUrl } from '../steps/world'; 

export abstract class BasePage {
    protected readonly context: BrowserContext;
    protected readonly page: Page;

    public openUrl: string;
    public landUrl: RegExp;
    public elements: {[key in Element]?: Locator};

    protected constructor(page: Page, context: BrowserContext) {
        this.openUrl = '';
        this.landUrl = /^$/;
        this.context = context;
        this.page = page;
        this.elements = {};
    }

    public async getBrowserTitle(): Promise<String> {
        return this.page.title();
    }

    public async open() {
        await this.page.goto(baseUrl + this.openUrl);
    }

    public async reload() {
        await this.page.reload();
    }

    public isElementDefined(key: Element): boolean {
        return Object.hasOwn(this.elements, key);
    }

    public async getElement(key: Element): Promise<undefined|Locator> {
        if (!this.isElementDefined(key)) return undefined;

        try {
            let element = this.elements[key];
            await element?.waitFor();
            if (!element?.isVisible()) await element?.scrollIntoViewIfNeeded();
            return element;
        } catch (error) {
            return undefined;
        }
    }
}