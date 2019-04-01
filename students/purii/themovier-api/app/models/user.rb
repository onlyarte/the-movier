class User < ApplicationRecord
  # model association
  has_many :following_follows, class_name: 'Follow', foreign_key: :following_id, dependent: :destroy
  has_many :followed_follows, class_name: 'Follow', foreign_key: :followed_id, dependent: :destroy

  has_many :followings, through: :following_follows, source: :followed
  has_many :followers, through: :followed_follows, source: :following

  # validations
  validates_presence_of :email, :password, :username, :name, :is_super
end
