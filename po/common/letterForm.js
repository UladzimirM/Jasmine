const SideBar = require('./sideBar');

class LetterForm {
    constructor() {
        this.emailAdress = element(by.xpath('//div[@data-name="to"]//input[@type="text"]'));
        this.emailSubject = element(by.css('[name="Subject"]'));
        this.emailText = element(by.xpath('//div[@role="textbox"]/div[1]'));
        this.sendMail = element(by.xpath('//span[@data-title-shortcut="Ctrl+Enter"]/span[1]'));
        this.saveMail = element(by.xpath('//span[@data-title-shortcut="Ctrl+S"]/span[1]'));
        this.closeMail = element(by.xpath('//div[@class="compose-app__buttons"]/span[3]/span[1]'));
        this.openMail = element(by.xpath('//div[@class="dataset__items"]/a[1]//div[@class="llc__content"]'));
        this.closeSentWindow = element(by.xpath('//div[@class="layer__controls"]//span[@class="button2__wrapper"]'));
        this.sideBar = new SideBar();
    }

    writeEmail() {
        let adress = 'testaccountforme@yandex.ru';
        let subject = 'test';
        let text = 'Hello!';
        browser.driver.sleep(8000);
        this.sideBar.write.click()
          .then(() => {
                return browser.driver.sleep(1000);
            })
            .then(() => {
                return this.emailAdress.sendKeys(adress);
            })
            .then(() => {
                return this.emailSubject.sendKeys(subject);
            })
            .then(() => {
                return this.emailText.sendKeys(text);
            }
            )   .then(() => {
                return browser.driver.sleep(1000);
            })
            
    }
  
    saveEmail() {
        return this.saveMail.click()
        .then(() => {
            return browser.driver.sleep(1000);
              }) 
    }

    closeEmail() {
        return this.closeMail.click() 
        .then(() => {
            return browser.driver.sleep(1000);
              });
    }  

 openEmail(){
    return this.openMail.click() 
    .then(() => {
        return browser.driver.sleep(1000);
          });
 }   
  
 sendEmail() {
    return this.sendMail.click()
    .then(() => {
        return browser.driver.sleep(1000);
          })
   .then(() => {
       return this.closeSentWindow.click();
   })  
 }


}

module.exports = LetterForm;