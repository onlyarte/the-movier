class ListMovie < ApplicationRecord
  # model association
  belongs_to :movie
  belongs_to :list

  # validations
  validates_presence_of :list, :movie
end
