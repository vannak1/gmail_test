require 'spec_helper'

feature 'User authentitcation' do
  scenario 'logs user in with a valid email and password' do
    sign_in(ENV["USER"], ENV["PASS"])

    expect(page).to have_content("Inbox")
  end

  scenario 'logs user out when they click signout' do
    click_on "Google Account"
    click_on "Sign out"

    expect(page).to have_content("One Google Account for everything Google")
  end
end
