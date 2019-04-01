require 'rails_helper'

RSpec.describe User, type: :model do
  # ensure columns email, password, username, name and is_super are present before saving
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:is_super) }
end
