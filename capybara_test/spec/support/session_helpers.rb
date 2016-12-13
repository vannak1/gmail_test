module Features
  module SessionHelpers
    def sign_in(email,password)
      visit 'http://mail.google.com'

      within("#gaia_loginform") do
        fill_in 'Email', with: ENV["USER"]
        click_button 'next'
        fill_in 'Passwd', with: ENV["PASS"]
      end

      click_button 'signIn'
    end

    def sign_out
      click_on 'https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com/mail&service=mail'
      click_on 'Sign out'
    end
  end
end
