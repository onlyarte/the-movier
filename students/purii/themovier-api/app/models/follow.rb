class Follow < ApplicationRecord
  # model association
  belongs_to :following, class_name: "User"
  belongs_to :followed, class_name: "User"

  # validations
  validates_presence_of :following, :followed, :created_at
end
