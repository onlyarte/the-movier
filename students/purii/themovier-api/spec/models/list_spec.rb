require 'rails_helper'

RSpec.describe List, type: :model do
  # ensure a list record belongs to a single author
  it { should belong_to(:author) }

  # ensure one list has many list-movies
  it { should have_many(:list_movies) }

  # ensure one list has many movies
  it { should have_many(:movies) }

  # ensure columns title, author and created_at are present before saving
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:author) }
  it { should validate_presence_of(:created_at) }
end
