class Student < ApplicationRecord
  belongs_to :group

  validates :avg_rating, numericality: { greater_than: 0, less_than_or_equal_to: 100 }

  def full_name
    "#{first_name} #{last_name}"
  end
end
