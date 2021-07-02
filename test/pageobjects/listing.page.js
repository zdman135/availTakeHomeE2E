const Page = require('./page');

class ListingPage extends Page {
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get listingId () { return $('.listing-id') }

    async createListing() {
        await (await this.title).setValue(faker.commerce.productName());
        await (await this.description).setValue(faker.commerce.productDescription());
        await (await this.btnSubmit).click();
        return await (await this.listingId.getText());
    }

    open (path = '') {
        return super.open(`listing/${path}`);
    }
}

module.exports = new ListingPage();
