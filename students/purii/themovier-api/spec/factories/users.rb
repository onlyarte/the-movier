FactoryBot.define do
  factory :user do
    email { Faker::Lorem.word + "@gmail.com" }
    password { Faker::Lorem.word }
    username { Faker::Lorem.word }
    name { Faker::Lorem.word }
    is_super false
  end
end