FactoryBot.define do
  factory :user do
    email { Faker::Lorem.word + "@gmail.com" }
    password { Faker::Lorem.word }
    username { Faker::Lorem.word }
    name { Faker::Superhero.name }
    is_super { Faker::Boolean.boolean }
  end
end