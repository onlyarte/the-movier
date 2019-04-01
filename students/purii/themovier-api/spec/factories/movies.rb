FactoryBot.define do
  factory :movie do
    title { Faker::Lorem.word }
    year { Faker::Number.between(1990, 2019) }
    runtime { Faker::Number.between(40, 140) }
    genre { Faker::Lorem.words(3).join(", ") }
    directors { Faker::Lorem.words(2).join(", ") }
    writers nil
    actors nil
    plot { Faker::Lorem.sentence }
    country { Faker::Lorem.word }
    poster nil
    imdb_rating { Faker::Number.between(3, 9) + 0.2 }
  end
end