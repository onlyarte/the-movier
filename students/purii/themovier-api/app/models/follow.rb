class Follow < ApplicationRecord
  # model association
  belongs_to :follower, class_name: "User"
  belongs_to :following, class_name: "User"

  # validations
  validates_presence_of :follower, :following, :created_at
end
