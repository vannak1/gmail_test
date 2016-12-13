ENV['USER'] = "vannak.learn"
ENV['PASS'] = "Drowssap12"

require 'capybara/rspec'
require 'faker'
require 'support/session_helpers'

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

Capybara.configure do |c|
  c.current_driver = :selenium
  c.run_server = false
  c.default_max_wait_time = 5
end

RSpec.configure do |config|
  config.include Features::SessionHelpers, :type => :feature
  config.include Capybara::DSL, :type => :feature
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end
