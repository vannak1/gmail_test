require 'capybara/rspec'
Capybara.configure do |c|
  c.current_driver = :selenium
  c.app_host = "http://mail.google.com"
  c.run_server = false
end

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

RSpec.configure do |config|
  config.include Capybara::DSL, :type => :feature
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups

end
