import { Page, Locator } from "playwright";

export class ContactAppLoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly signUpButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByPlaceholder('Email');
        this.passwordInput = page.getByPlaceholder('Password');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    }

    async navigateToLandingPage() {
        await this.page.goto("https://thinking-tester-contact-list.herokuapp.com/login");
        await this.page.context().clearCookies();
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
        await this.page.waitForLoadState("networkidle");
    }

    async clickSignUpButton() {
        await this.signUpButton.click();
    }

}