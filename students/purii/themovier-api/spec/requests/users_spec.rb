require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  # init test data
  let!(:users) { create_list(:user, 10) }
  let(:user_id) { users.first.id }

  describe 'GET /users' do
    before { get '/users' }

    it 'returns users' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  describe 'GET /users/:id' do
    before { get "/users/#{user_id}" }

    context 'when the record exists' do
      it 'returns the user' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(user_id)
      end

      it 'return status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:user_id) { 301 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /users' do
    let(:valid_attributes) { {
      email: 'myemail@gmail.com',
      password: '16hjh8987h',
      username: 'myusername',
      name: 'My Full Name',
      is_super: false
    } }

    context 'when request is successful' do
      before { post '/users', params: valid_attributes }

      it 'creates a user' do
        expect(json['name']).to eq(valid_attributes[:name])
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request has failed' do
      before { post '/users', params: { email: 'some@ukr.net', password: 'hjhjh778' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'PATCH /users/:id' do
    let(:valid_attributes) { { name: 'Other Name' } }

    context 'when the record exists' do
      before { put "/users/#{user_id}", params: valid_attributes }

      it 'updates the record' do
        expect(json).not_to be_empty
        expect(json['name']).to eq(valid_attributes[:name])
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'DELETE /users/:id' do
    before { delete "/users/#{user_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
