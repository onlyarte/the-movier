require 'rails_helper'

RSpec.describe 'Follows API', type: :request do
  # init test data
  let!(:user1) { create(:user) }
  let!(:user2) { create(:user) }
  let(:user1_id) { user1.id }
  let(:user2_id) { user2.id }

  describe 'GET /users/:user_id/followings' do
    before do
      post "/users/#{user1_id}/followings", params: { user_id: user2_id }
      get "/users/#{user1_id}/followings"
    end

    it 'returns all followings' do
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /users/:user_id/followers' do
    before { get "/users/#{user2_id}/followers" }

    it 'returns all followers' do
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /users/:user_id/followings' do
    let(:valid_attributes) { { user_id: user1_id } }

    context 'when params are valid' do
      before { post "/users/#{user2_id}/followings", params: valid_attributes }

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when params are wrong' do
      before { post "/users/#{user2_id}/followings", params: { user_id: 301 } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /users/:user_id/followings/:followed_id' do
    before do
      delete "/users/#{user1_id}/followings/#{user2_id}"
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
