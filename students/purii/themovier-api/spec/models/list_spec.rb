require 'rails_helper'

RSpec.describe List, type: :model do
  # ensure a list record belongs to a single author
  it { should belong_to(:author) }

  # ensure the List model has a 1:m relationship with the Movie model
  it { should have_many(:movies).dependent(:destroy) }

  # ensure columns title, author and created_at are present before saving
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:author) }
  it { should validate_presence_of(:created_at) }
end
