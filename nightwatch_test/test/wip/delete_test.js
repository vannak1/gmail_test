var config = require('../../nightwatch.conf.js');

module.exports = {
  before: function(browser){
      browser
        .url('http://mail.google.com')
        .waitForElementVisible('#Email')
        .setValue('#Email', process.env.USERNAME)
        .click('#next')
        .waitForElementVisible('#Passwd')
        .setValue('#Passwd', process.env.PASSWORD)
        .click('#PersistentCookie')
        .click('#signIn')
        .waitForElementVisible('.T-I.J-J5-Ji.T-I-KE.L3')
  },
  'It should delete emails from "Tom"': function(browser) {
    browser
      .url('https://mail.google.com/mail/u/0/#inbox')
      .setValue('input#gbqfq.gbqfif', "from:me")
      .keys(browser.Keys.ENTER)
      .useXpath()
      .pause(200)
      .pause()
      .end()
  },
};
