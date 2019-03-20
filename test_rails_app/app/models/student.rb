class Student < ApplicationRecord
  TOP_STUDENTS_NUMBER = 2

  belongs_to :group

  validates :avg_rating, numericality: { greater_than: 0, less_than_or_equal_to: 100 }
  validates :first_name, :last_name, presence: true

  before_validation :do_something_else
  before_create :do_something
  before_save :calc_has_stipend

  def full_name
    "#{first_name} #{last_name}"
  end

  private
  def do_something
    binding.pry
  end

  def do_something_else
  end

  def calc_has_stipend
    self.has_stipend = ::Student.where('avg_rating > ?', self.avg_rating).count < TOP_STUDENTS_NUMBER
  end
end
