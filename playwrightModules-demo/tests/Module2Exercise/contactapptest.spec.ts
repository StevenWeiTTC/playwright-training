import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { ContactAppSignUpPage } from '../../pages/contactAppPages/contactAppSignUpPage';
import { ContactAppLoginPage } from '../../pages/contactAppPages/contactAppLoginPage';
import { ContactAddContactPage } from '../../pages/contactAppPages/contactAddContactPage';
import { ContactAppContactPage} from '../../pages/contactAppPages/contactAppContactPage';

test.describe('Contact app test', () => {

    test("Add Contact to App @pomContact", async ({ page }) => {

    const contactAppSignUpPage = new ContactAppSignUpPage(page);
    const contactAppLoginPage = new ContactAppLoginPage(page);
    const contactAddContactPage = new ContactAddContactPage(page);
    const contactAppContactPage = new ContactAppContactPage(page);

    //Click sign up button
    await contactAppLoginPage.navigateToLandingPage();
    await contactAppLoginPage.clickSignUpButton();
    
    //Sign up process
    await contactAppSignUpPage.signUp("userfirst", "userlast", "test@email.com", "12345678");

    //Login
    await contactAppLoginPage.login("test@email.com","12345678");

    //Add contact
    await contactAppContactPage.clickAddContactButton();
    await contactAddContactPage.addContactDetails("Contactfirst", "Contactlast","1990-01-01", "contact@email.com","100 test street", "test city", "test country");

    //Verify if contact added
    await expect(contactAppContactPage.contactTableRow1).toBeVisible();
    })

})