require 'spec_helper'

feature 'User authentitcation' do
  scenario 'logs user in with a valid email and password' do
    sign_in(ENV["USER"], ENV["PASS"])

    expect(page).to have_content("Inbox")
  end

  scenario 'logs user out when they click signout' do
    sign_out

    expect(page).to have_content("Sign in")
  end
end

feature 'Email transmission' do
  scenario 'user sends an email' do
    sign_in(ENV["USER"], ENV["PASS"])

    compose_window = find("div.T-I.J-J5-Ji.T-I-KE.L3").click

    within_window compose_window do
      fill_in("to", with: "vannak.learn@mail.com")
      fill_in("subjectbox", with: "test")
      fill_in("Message Body", with: "test email")

      click_on("Send")
    end
    expect(page).to have_content("Inbox")
  end

  scenario 'logs user out when they click signout' do
    sign_out

    expect(page).to have_content("Sign in")
  end
end
