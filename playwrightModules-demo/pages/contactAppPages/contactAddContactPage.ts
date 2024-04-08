import { Page, Locator } from "playwright";

export class ContactAddContactPage {
    readonly page: Page;
    readonly addContactButton: Locator;
    readonly contactFirstName: Locator;
    readonly contactLastName: Locator;
    readonly contactDateofBirth: Locator;
    readonly contactEmail: Locator;
    readonly contactAddress: Locator;
    readonly contactCity: Locator;
    readonly contactCountry: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addContactButton = page.getByRole('button', { name: 'Submit' });
        this.contactFirstName = page.getByPlaceholder('First Name');
        this.contactLastName = page.getByPlaceholder('Last Name');
        this.contactDateofBirth = page.getByPlaceholder('yyyy-MM-dd');
        this.contactEmail = page.getByPlaceholder('example@email.com');
        this.contactAddress = page.getByPlaceholder('Address 1');
        this.contactCity = page.getByPlaceholder('City');
        this.contactCountry= page.getByPlaceholder('Country');
    }


    async addContactDetails(
        firstname: string, 
        lastname: string, 
        dob: string,
        email: string,
        address: string,
        city: string,
        country: string,){
        await this.contactFirstName.fill(firstname);
        await this.contactLastName.fill(lastname);
        await this.contactDateofBirth.fill(dob);
        await this.contactEmail.fill(email);
        await this.contactAddress.fill(address);
        await this.contactCity.fill(city);
        await this.contactCountry.fill(country);
    }

    async clickSubmitButton() {
        await this.addContactButton.click();
    }

}