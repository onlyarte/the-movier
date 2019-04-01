FactoryBot.define do
  factory :list do
    title { Faker::Lorem.word }
    author_id nil
  end
end