var config = require('../../nightwatch.conf.js');

module.exports = {
  'Displays login page if user not logged in': function(browser) {
    browser
      .url('http://mail.google.com')
      .waitForElementVisible('body')
      .assert.title('Gmail')
  },

  'Goes to inbox if user logs in with valid credentials': function(browser) {
    browser
      .setValue('#Email', process.env.USERNAME)
      .click('#next')
      .waitForElementVisible('#Passwd')
      .setValue('#Passwd', process.env.PASSWORD)
      .click('#PersistentCookie')
      .click('#signIn')
      .waitForElementVisible('div.aim.ain')
      .pause(200)
      .assert.containsText('body', 'COMPOSE')
      .assert.containsText('body', 'Inbox')
      .assert.containsText('body', 'Sent Mail')
  },
  'Takes user to login page when user logs out': function(browser) {
    browser
      .deleteCookies()
      .url('http://mail.google.com')
      .assert.containsText('body', 'The ease & simplicity of Gmail, available across devices')
      .end()
  }
};
