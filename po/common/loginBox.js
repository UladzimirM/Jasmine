const provider = require('../pageObjectProvider');

browser.ignoreSynchronization = true;
class LoginBox {
    constructor() {
        this.loginBox = element(by.id('mailbox-container'));
        this.login = element(by.id('mailbox:login'));
        this.submitButton = element(by.id('mailbox:submit'));
        this.password = element(by.id('mailbox:password'));
        this.logo = element(by.id('logo'));
      
    }
    highlightWithJS(el) {
        let bg;
        return el.getCssValue("background").then(function (col) {
            bg = col;
        }).then(function () {
            return browser.driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", el)
        }).then(function () {
            return browser.driver.sleep(1000);
        }).then(function () {
            console.log('bg', bg);
            return browser.driver.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", el);
        }).then(function () {
            return browser.driver.sleep(1000);
        })
    }

    enterEmail() {
        let emailLogin = 'testaccountforstudy';
        let passwordText = 'A147B258C369';

        this.highlightWithJS(browser.driver.findElement((by.id('mailbox:login'))))
        .then(() => {
            return this.login.sendKeys(emailLogin);
        })
            .then(() => {
            return this.submitButton.click();
        })
        .then(() => {
            return this.highlightWithJS(browser.driver.findElement((by.id('mailbox:password'))));
        })
               .then(() => { 
                return this.password.sendKeys(passwordText);
                //this.password.sendKeys(passwordText)
            })
            
            .then(() => {
               return browser.actions().mouseMove(this.submitButton).mouseDown().mouseUp().perform();
             })
            .then(() => {
                browser.driver.sleep(5000);
                return provider.getPageObjects('home');
            })
    }
}

module.exports = LoginBox;