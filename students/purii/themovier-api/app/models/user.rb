class User < ApplicationRecord
  # validations
  validates_presence_of :email, :password, :username, :name, :is_super
end
