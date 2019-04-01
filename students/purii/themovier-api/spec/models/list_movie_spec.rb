require 'rails_helper'

RSpec.describe ListMovie, type: :model do
  # ensure a list-movie record belongs to a single list
  it { should belong_to(:list) }

  # ensure a list-movie record belongs to a single movie
  it { should belong_to(:movie) }

  # ensure columns title, year, genre and directors are present before saving
  it { should validate_presence_of(:list) }
  it { should validate_presence_of(:movie) }
  it { should validate_presence_of(:created_at) }
end
