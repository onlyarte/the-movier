require 'rails_helper'

RSpec.describe Movie, type: :model do
  # ensure columns title, year, genre and directors are present before saving
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:year) }
  it { should validate_presence_of(:genre) }
  it { should validate_presence_of(:directors) }
end
