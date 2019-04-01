require 'rails_helper'

RSpec.describe 'Lists API', type: :request do
  # init test data
  let!(:author) { create(:user, is_super: true) }
  let!(:lists) { create_list(:list, 10, author_id: author.id) }
  let(:author_id) { author.id }
  let(:list_id) { lists.first.id }

  describe 'GET /lists' do
    before { get '/lists' }

    it 'returns lists' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  describe 'GET /lists/:id' do
    before { get "/lists/#{list_id}" }

    context 'when the record exists' do
      it 'returns the list' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(list_id)
      end

      it 'return status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:list_id) { 301 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /lists' do
    let(:valid_attributes) { { title: 'Favourites', author_id: author_id } }

    context 'when request is successful' do
      before { post '/lists', params: valid_attributes }

      it 'creates a list' do
        expect(json['title']).to eq('Favourites')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request has failed' do
      before { post '/lists', params: { title: 'Favs' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'PATCH /lists/:id' do
    let(:valid_attributes) { { title: 'Best of 2018' } }

    context 'when the record exists' do
      before { put "/lists/#{list_id}", params: valid_attributes }

      it 'updates the record' do
        expect(json).not_to be_empty
        expect(json['title']).to eq(valid_attributes[:title])
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'DELETE /lists/:id' do
    before { delete "/lists/#{list_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
