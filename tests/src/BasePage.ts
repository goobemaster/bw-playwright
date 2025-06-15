import { BrowserContext, Locator, Page } from '@playwright/test';
import { Element } from './Element';
import { baseUrl } from '../steps/world'; 

export abstract class BasePage {
    //protected static instance: BasePage; // must be public
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

    // public static getInstance(): BasePage {
    //     if (!this.instance) this.instance = new (<any>this.constructor);

    //     return this.instance;
    // }

    public async getBrowserTitle(): Promise<String> {
        return this.page.title();
    }

    public async open() {
        await this.page.goto(baseUrl + this.openUrl);
    }

    public async reload() {
        await this.page.reload();
    }

    public async getElement(key: Element): Promise<undefined|Locator> {
        if (!Object.hasOwn(this.elements, key)) return undefined;

        try {
            let element = this.elements[key];
            await element?.waitFor();
            if (!element?.isVisible) element?.scrollIntoViewIfNeeded();
            return element;
        } catch (error) {
            return undefined;
        }
    }
}