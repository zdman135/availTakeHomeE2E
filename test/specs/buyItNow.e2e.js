const LoginPage = require('../pageobjects/login.page');
const ListingPage = require('../pageobjects/listing.page');
const listingPage = require('../pageobjects/listing.page');

describe('Buy it now in auction', () => {
    context('basic standard auction', async () => {
        let listingId;

        before('Registered User is Logged into Site', async () => {
            await LoginPage.open();    
            await LoginPage.login('tomsmith', 'SuperSecretPassword!');

            listingId = listingCreator.standardListingBIN()
        })
        test('place a bid in auction', async () => {
            await listingPage.open(`/${listingId}`);
            ListingPage.buyItNow(true);

            await expect(ListingPage.auction()).to.eql("closed");
        });
    })
});
