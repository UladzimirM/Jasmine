 const BasePage =  require('./../po/basePage')
     HomePage = require('./../po/homePage'),
      Helper = require('./../support/helper.js'),
      LetterForm = require('./../po/common/letterForm'),
      LoginBox = require('./../po/common/loginBox'),
      SideBar = require('./../po/common/sideBar');
    
    browser.ignoreSynchronization = true;

describe('Sign up to the site', () => {
    let  basePage, homePage, helper, letterForm, sideBar, loginBox;

    beforeAll(() => {
        basePage = new BasePage()
        homePage = new HomePage();
        helper = new Helper();
        letterForm = new LetterForm(); 
        loginBox = new LoginBox();
        sideBar = new SideBar();
       return basePage.visit();
    });

  
    it('should check page title of Home Page', () => {
       return expect(basePage.checkPageTitle('Mail.ru: почта, поиск в интернете, новости, игры')).to.eventually.be.true;
    });
       
   it('should enter to Email', () => {
        loginBox.enterEmail();
        return expect(homePage.checkPageTitle('Входящие - Почта Mail.ru')).to.eventually.be.true;
    });

     it('should write letter' , () => {
        return letterForm.writeEmail();
      });
    
    it('should save letter' , () => {
        return letterForm.saveEmail();
    });
        
    it('should close letter' , () => {
        return letterForm.closeEmail();
    });
    
    it('should check in email and subject in drafts' , () => {
         helper.clickToElement(sideBar.drafts);
         return expect(homePage.checkEmail('testaccountforme@yandex.ru', 'test')).to.eventually.be.true;
        
    });


   
    it('should send letter' , () => {
        letterForm.openEmail();
        return letterForm.sendEmail();
    });

    it('should check in email and subject in sent' , () => {
        helper.clickToElement(sideBar.sent);
        return expect(homePage.checkEmail('testaccountforme@yandex.ru', 'test')).to.eventually.be.true;
       
   });

        
});