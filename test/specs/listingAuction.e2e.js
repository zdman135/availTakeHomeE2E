const LoginPage = require('../pageobjects/login.page');
const ListingPage = require('../pageobjects/listing.page');

describe('Listing Auctions', () => {
    context('basic standard auction', async () => {
        before('Registered User is Logged into Site', async () => {
            await LoginPage.open();    
            await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        })
        test('Create listing of basic auction', async () => {
            await listingPage.open();
            let listingId = await ListingPage.createListing();

            await expect(listingId).toBeExisting();
        });
    })
});
