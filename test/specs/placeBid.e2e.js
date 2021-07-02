const LoginPage = require('../pageobjects/login.page');
const ListingPage = require('../pageobjects/listing.page');
const listingPage = require('../pageobjects/listing.page');

describe('Place Bid in auction', () => {
    context('basic standard auction', async () => {
        let listingId;

        before('Registered User is Logged into Site', async () => {
            await LoginPage.open();    
            await LoginPage.login('tomsmith', 'SuperSecretPassword!');

            listingId = listingCreator.standardListing()
        })
        test('place a bid in auction', async () => {
            await listingPage.open(`/${listingId}`);
            ListingPage.placeBid(5);

            await expect(ListingPage.auctionPrice()).to.eql(5);
        });
    })
});
