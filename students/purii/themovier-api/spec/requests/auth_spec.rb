require 'rails_helper'

RSpec.describe 'Auth API', type: :request do
  let!(:user) { create(:user) }

  describe 'POST /auth/signup' do
    let(:valid_attributes) { {
      email: 'myemail@gmail.com',
      password: '16hjh8987h',
      username: 'myusername',
      name: 'My Full Name',
      is_super: false
    } }

    context 'when params are valid' do
      before { post '/auth/signup', params: valid_attributes }

      it 'creates a user' do
        expect(json['name']).to eq(valid_attributes[:name])
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when params are invalid' do
      before { post '/auth/signup', params: { email: 'some@ukr.net', password: 'hjhjh778' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'POST /auth/login' do
    let(:valid_params) { {
      email: user[:email],
      password: user[:password],
    } }

    let(:invalid_params) { {
      email: 'kjhkd@jk.jj',
      password: 'ds'
    } }

    context 'when the record exists' do
      before { post '/auth/login', params: valid_params }

      it 'returns the user' do
        expect(json['email']).to eq(valid_attributes[:email])
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      before { post '/auth/login', params: invalid_params }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end
end
