const LoginBox = require('./common/loginBox.js');
const provider = require('./pageObjectProvider');
class BasePage {
    constructor() {
       this.loginBox = new LoginBox();
    }

    visit() {
        browser.get('http://mail.ru/');
        return browser.wait(ec.elementToBeClickable(this.loginBox.logo), GLOBAL_TIMEOUT);
    }

    checkPageTitle(pageTitle) {
        return this.getPageTitle().then((title) => {
            return title === pageTitle;
        });
    }
    

    getPageTitle() {
        return browser.getTitle();
    }
    
    highlightWithJS(el) {
        let bg;
        return el.getCssValue("backgroundColor").then(function (col) {
            bg = col;
        }).then(function () {
            return driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", el)
        }).then(function () {
            return driver.sleep(1000);
        }).then(function () {
            console.log('bg', bg);
            return driver.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", el);
        }).then(function () {
            return driver.sleep(1000);
        })
    }
}

module.exports = BasePage;