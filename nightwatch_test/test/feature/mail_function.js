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
        .elementIdSelected('#PersistentCookie', false)
        .click('#signIn')
        .waitForElementVisible('.T-I.J-J5-Ji.T-I-KE.L3')
  },

  'It should send mail & receive mail': function(browser) {
    browser
      .click('.T-I.J-J5-Ji.T-I-KE.L3')
      .pause(1000)
      .keys(process.env.USERNAME + "@gmail.com")
      .keys(browser.Keys.TAB)
      .keys(browser.Keys.TAB)
      .keys("Test Email")
      .keys(browser.Keys.TAB)
      .keys("Test Email")
      .keys([browser.Keys.CONTROL, browser.Keys.ENTER])
      .url('https://mail.google.com/mail/u/0/#sent')
      .assert.containsText("body", "me")
      .assert.containsText("body", "Test Email - Test Email")
      .url('https://mail.google.com/mail/u/0/#inbox')
      .assert.containsText("body", "me")
      .assert.containsText("body", "Test Email - Test Email")
      .end()
  },
};
