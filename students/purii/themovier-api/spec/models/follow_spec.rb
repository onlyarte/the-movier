require 'rails_helper'

RSpec.describe Follow, type: :model do
  # ensure a follow record belongs to a single follower
  it { should belong_to(:follower).dependent(:destroy) }

  # ensure a follow record belongs to a single following
  it { should belong_to(:following).dependent(:destroy) }

  # ensure columns follower and following are present before saving
  it { should validate_presence_of(:follower) }
  it { should validate_presence_of(:following) }
  it { should validate_presence_of(:created_at) }
end
