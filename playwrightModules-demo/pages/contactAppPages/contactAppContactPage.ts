import { Page, Locator } from "playwright";

export class ContactAppContactPage {
    readonly page: Page;
    readonly addContactButton: Locator;
    readonly contactTableRow1: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addContactButton = page.getByRole('button', { name: 'Add a New Contact' });
        this.contactTableRow1 = page.getByRole('cell', { name: 'Contact test1' });
    }

    async clickAddContactButton() {
        await this.addContactButton.click();
    }

}