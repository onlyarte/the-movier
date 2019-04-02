require 'rails_helper'

RSpec.describe 'ListMovies API', type: :request do
  # init test data
  let!(:author) { create(:user) }
  let!(:list) { create(:list, author_id: author.id) }
  let!(:movie) { create(:movie) }
  let(:author_id) { author.id }
  let(:list_id) { list.id }
  let(:movie_id) { movie.id }

  describe 'GET /lists/:list_id/movies' do
    before do
      post "/lists/#{list_id}/movies", params: { movie_id: movie_id }
      get "/lists/#{list_id}/movies"
    end

    context 'when the list exists' do
      it 'returns all list movies' do
        expect(json.size).to eq(1)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the list does not exist' do
      let(:list_id) { 301 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /lists/:list_id/movies' do
    let(:valid_attributes) { { movie_id: movie_id } }

    context 'when params are valid' do
      before { post "/lists/#{list_id}/movies", params: valid_attributes }

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end

    context 'when params are wrong' do
      before { post "/lists/#{list_id}/movies", params: { movie_id: 301 } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'DELETE /lists/:list_id/movies/:movie_id' do
    before do
      post "/lists/#{list_id}/movies", params: { movie_id: movie_id }
      delete "/lists/#{list_id}/movies/#{movie_id}"
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
