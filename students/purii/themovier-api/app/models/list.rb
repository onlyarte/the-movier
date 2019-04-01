class List < ApplicationRecord
  # model association
  belongs_to :author, class_name: "User"
  has_many :list_movies, dependent: :destroy
  has_many :movies, through: :list_movies

  # validations
  validates_presence_of :title, :author, :created_at
end
