require 'rails_helper'

RSpec.describe 'Follows API', type: :request do
  # init test data
  let!(:users) { create_list(:user, 10) }

  describe 'GET /users/:user_id/followings' do
    it 'returns status code 200' do
      get "/users/#{users[0].id}/followings"
      expect(response).to have_http_status(200)
    end

    it 'returns empty list when user[0] does not follow other users' do
      get "/users/#{users[0].id}/followings"
      expect(json.size).to eq(0)
    end

    it 'returns user[1] if user[0] follows user[1]' do
      post "/users/#{users[0].id}/followings", params: { followed_id: users[1].id }
      get "/users/#{users[0].id}/followings"
      expect(json[0]['id']).to eq(users[1].id)
    end

    it 'returns only user[1], user[2], user[5] if user[0] folows only them' do
      post "/users/#{users[0].id}/followings", params: { followed_id: users[1].id }
      post "/users/#{users[0].id}/followings", params: { followed_id: users[2].id }
      post "/users/#{users[0].id}/followings", params: { followed_id: users[5].id }
      get "/users/#{users[0].id}/followings"
      expect(json.size).to eq(3)
      expect(json[0]['id']).to eq(users[1].id)
      expect(json[1]['id']).to eq(users[2].id)
      expect(json[2]['id']).to eq(users[5].id)
    end
  end

  describe 'GET /users/:user_id/followers' do
    it 'returns status code 200' do
      get "/users/#{users[0].id}/followers"
      expect(response).to have_http_status(200)
    end

    it 'returns empty list if noone follows user[0]' do
      get "/users/#{users[0].id}/followers"
      expect(json.size).to eq(0)
    end

    it 'returns user[1] if user[1] follows user[0]' do
      post "/users/#{users[1].id}/followings", params: { followed_id: users[0].id }
      get "/users/#{users[0].id}/followers"
      expect(json.size).to eq(1)
      expect(json[0]['id']).to eq(users[1].id)
    end

    it 'returns user[1], user[7] if they follow user[0]' do
      post "/users/#{users[1].id}/followings", params: { followed_id: users[0].id }
      post "/users/#{users[7].id}/followings", params: { followed_id: users[0].id }
      get "/users/#{users[0].id}/followers"
      expect(json.size).to eq(2)
      expect(json[0]['id']).to eq(users[1].id)
      expect(json[1]['id']).to eq(users[7].id)
    end
  end

  describe 'POST /users/:user_id/followings' do
    context 'when params are valid' do
      before do
        post "/users/#{users[5].id}/followings", params: { followed_id: users[6].id }
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'increases number of followings' do
        get "/users/#{users[5].id}/followings"
        expect(json.size).to eq(1)
      end

      it 'increases number of followers' do
        get "/users/#{users[6].id}/followers"
        expect(json.size).to eq(1)
      end

      it 'added correct user to followings' do
        get "/users/#{users[5].id}/followings"
        expect(json[0]['id']).to eq(users[6].id)
      end

      it 'added correct user to followers' do
        get "/users/#{users[6].id}/followers"
        expect(json[0]['id']).to eq(users[5].id)
      end
    end

    context 'when params are wrong' do
      it 'returns status code 422' do
        post "/users/#{users[0].id}/followings", params: { followed_id: 301 }
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /users/:user_id/followings/:followed_id' do
    it 'returns status code 204' do
      post "/users/#{users[0].id}/followings", params: { followed_id: users[9].id }
      delete "/users/#{users[0].id}/followings/#{users[9].id}"
      expect(response).to have_http_status(204)
    end

    it 'decreases number of followings' do
      post "/users/#{users[0].id}/followings", params: { followed_id: users[9].id }
      delete "/users/#{users[0].id}/followings/#{users[9].id}"
      get "/users/#{users[0].id}/followings"
      expect(json.size).to eq(0)
    end

    it 'decreases number of followers' do
      post "/users/#{users[0].id}/followings", params: { followed_id: users[9].id }
      delete "/users/#{users[0].id}/followings/#{users[9].id}"
      get "/users/#{users[9].id}/followers"
      expect(json.size).to eq(0)
    end

    it 'deletes user[2] from user[3] followings if user[3] follows user[2], user[8] and user[9]' do
      post "/users/#{users[3].id}/followings", params: { followed_id: users[2].id }
      post "/users/#{users[3].id}/followings", params: { followed_id: users[8].id }
      post "/users/#{users[3].id}/followings", params: { followed_id: users[6].id }
      delete "/users/#{users[3].id}/followings/#{users[2].id}"
      get "/users/#{users[3].id}/followings"
      expect(json.size).to eq(2)
      expect(json[0]['id']).to eq(users[8].id)
      expect(json[1]['id']).to eq(users[6].id)
    end
  end
end
