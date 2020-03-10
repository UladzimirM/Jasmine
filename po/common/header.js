class Header {
    constructor() {
        this.header = element(by.css('.w-x-ph'));
        this.headerLinks = element.all(by.css('w-x-ph__col_left a'));
        this.joinLink = element(by.css("x-ph__auth__link[id='PH_authLink']"));s
    }
}

module.exports = Header;