describe('Gmail homepage', function() {
  it('it should display about page when not logged in', function() {
    browser.driver.get('http://mail.google.com');

    expect(browser.driver.getTitle()).toMatch('Gmail');
  });
});

//Log in
describe('Authentication capabilities', function() {
  var fail = function() { expect(true).toBe(false); }

  it('should redirect to the login page if trying to load protected page while not authenticated', fail);
  it('should accept a valid email address and password', fail);
  it('should reject invalid password', fail);
  it('should return to the login page after logout', fail);
});

//Unread email
describe('Accuracy of unread mail count', function() {

  it('should count 1 for each unread mail');
  it('should reduce by 1 when unread mail is marked as read');
  it('should increase by 1 when read mail is marked as unread');
})

//Deletion of emails
describe('Deletion of email', function() {

  it('should remove mail from inbox');
  it('should be in trash');
})

//Sent & receive
describe('Email sending and receieving', function() {
  it should('be in Sent Mail when sent');
  it should('be received in recipient\'s inbox');
  it should('increase inbox unread by 1')
})
