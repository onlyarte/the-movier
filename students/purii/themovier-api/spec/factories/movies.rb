FactoryBot.define do
  factory :movie do
    title { Faker::Lorem.word }
    year { Faker::Number.between(1990, 2019) }
    runtime { Faker::Number.between(40, 140) }
    genre { Faker::Lorem.words(3).join(", ") }
    directors { Faker::Artist.name }
    writers { Faker::Artist.name }
    actors { "#{Faker::Artist.name}, #{Faker::Artist.name}" }
    plot { Faker::Lorem.sentence }
    country { Faker::Address.country }
    poster { Faker::Fillmurray.image(false, 600, 850) }
    imdb_rating { Faker::Number.between(3, 9) + 0.2 }
  end
end