source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.15'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
gem 'rails-uikit-sass', github: 'RadialDevGroup/rails-uikit-sass'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Thin as the app server
gem 'thin'
gem 'slim-rails'

gem 'rails_12factor', group: :production
gem 'rollbar', '~> 2.7.1'
gem 'newrelic_rpm'

gem 'rack-cors', :require => 'rack/cors'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'react-rails'

gem 'responders'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'guard'
  gem 'guard-rails'
  gem 'guard-bundler'
  gem 'guard-rspec'
  gem 'launchy'
  gem 'pry-byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'better_errors'
  gem 'binding_of_caller'

  gem 'quiet_assets'
end

group :test do
  gem 'capybara'
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'timecop', '~> 0.8.0'
end
