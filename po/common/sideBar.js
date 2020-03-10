
class SideBar {
    constructor() {
        this.sideBar = element(by.css('.sidebar-folders'));
        this.write = element(by.css('[data-title-shortcut="N"]'));
        this.inbox = element(by.css('[href="/inbox/"]'));
        this.sent = element(by.css('[href="/sent/"]'));
        this.drafts = element(by.css('[href="/drafts/"]'));
        this.spam = element(by.css('[href="/spam/"]'));
        this.trash = element(by.css('[href="/trash/"]'));
    }
  
}


module.exports = SideBar;