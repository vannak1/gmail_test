require 'faker'

first_name = Faker::Name.first_name
last_name = Faker::Name.last_name
username = "#{first_name}." + Faker::Number.number(4) + ".#{last_name}." + Faker::Number.number(2)

puts username
