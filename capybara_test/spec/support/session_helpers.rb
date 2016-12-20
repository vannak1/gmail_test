module Features
  module SessionHelpers
    def sign_in(email,password)
      visit '/'

      within("#gaia_loginform") do
        fill_in 'Email', with: ENV["USER"] if find_field('Email', :visible => :all).visible?
        click_button 'next'
        fill_in 'Passwd', with: ENV["PASS"]
        click_button 'signIn'
      end
    end

    def sign_out
      click_on 'Google Account'
      click_on 'Sign out'
    end
  end
end
