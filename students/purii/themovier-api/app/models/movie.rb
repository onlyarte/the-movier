class Movie < ApplicationRecord
  # model association
  has_many :list_movies, dependent: :destroy
  has_many :movies, through: :list_movies

  # validations
  validates_presence_of :title, :year, :genre, :directors
end
