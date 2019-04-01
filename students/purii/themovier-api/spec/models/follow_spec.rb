require 'rails_helper'

RSpec.describe Follow, type: :model do
  # ensure a follow record belongs to a single following user
  it { should belong_to(:following) }

  # ensure a follow record belongs to a single followed user
  it { should belong_to(:followed) }

  # ensure columns following and followed are present before saving
  it { should validate_presence_of(:following) }
  it { should validate_presence_of(:followed) }
end
