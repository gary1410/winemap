require "capybara/rspec"
require "capybara-screenshot"
require "capybara-screenshot/rspec"
require "simplecov"
require "support/subdomains"

SimpleCov.start "rails"

ENV["RAILS_ENV"] = "test"

require File.expand_path("../../config/environment", __FILE__)

require "rspec/rails"
require "shoulda-matchers"

Dir[Rails.root.join("spec/support/**/*.rb")].each { |file| require file }

module Features
  # Extend this module in spec/support/features/*.rb
end

RSpec.configure do |config|
  config.include ActionView::RecordIdentifier, type: :feature
  config.include AuthenticationHelper, type: :controller
  config.include Devise::TestHelpers, type: :controller
  config.include Formulaic::Dsl, type: :feature
  config.include Features, type: :feature
  config.include Warden::Test::Helpers, type: :feature

  config.infer_base_class_for_anonymous_controllers = false
  config.infer_spec_type_from_file_location!
  config.use_transactional_fixtures = false
end

Capybara.javascript_driver = :webkit
Capybara.always_include_port = true
ActiveRecord::Migration.maintain_test_schema!
