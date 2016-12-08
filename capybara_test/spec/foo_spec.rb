require 'spec_helper'
require 'user'

describe "the signin process", :type => :feature do
  

  it "signs me in" do
    visit 'http://mail.google.com'
    within("#session") do
      fill_in 'Email', with: user.first_name
      fill_in 'Password', with: 'password'
    end
    click_button 'Sign in'
    expect(page).to have_content 'Success'
  end
end
