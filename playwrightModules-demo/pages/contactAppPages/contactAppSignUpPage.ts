import { Page, Locator } from "playwright";

export class ContactAppSignUpPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;



    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.emailInput = page.getByPlaceholder('Email');
        this.passwordInput = page.getByPlaceholder('Password');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async navigateToSignUpPage() {
        await this.page.goto("https://thinking-tester-contact-list.herokuapp.com/addUser");
        await this.page.context().clearCookies();
    }

    async signUp(firstname: string, lastname: string, email: string, password: string) {
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
        await this.page.waitForLoadState("networkidle");
    }

}