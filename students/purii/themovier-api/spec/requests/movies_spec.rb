require 'rails_helper'

RSpec.describe 'Movies API', type: :request do
  # init test data
  let!(:movies) { create_list(:movie, 10) }
  let(:movie_id) { movies.first.id }

  describe 'GET /movies' do
    before { get '/movies' }

    it 'returns movies' do
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  describe 'GET /movies/:id' do
    before { get "/movies/#{movie_id}" }

    context 'when the record exists' do
      it 'returns the movie' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(movie_id)
      end

      it 'return status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:movie_id) { 301 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end
    end
  end

  describe 'POST /movies' do
    let(:valid_attributes) { {
      title: 'Only lovers left alive',
      year: 2013,
      runtime: 123,
      genre: 'Comedy, Drama, Fantasy',
      directors: 'Jim Jarmusch',
      writers: 'Jim Jarmusch',
      actors: ' Tilda Swinton, Tom Hiddleston, Mia Wasikowska',
      plot: 'A depressed musician reunites with his lover. Though their romance, which has already endured several centuries, is disrupted by the arrival of her uncontrollable younger sister.',
      country: 'UK, Germany, Greece, France'
    } }

    context 'when request is successful' do
      before { post '/movies', params: valid_attributes }

      it 'creates a movie' do
        expect(json['title']).to eq(valid_attributes[:title])
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request has failed' do
      before { post '/movies', params: { title: '' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end
    end
  end

  describe 'PATCH /movies/:id' do
    let(:valid_attributes) { { title: 'Only lovers left alive' } }

    context 'when the record exists' do
      before { put "/movies/#{movie_id}", params: valid_attributes }

      it 'updates the record' do
        expect(json).not_to be_empty
        expect(json['title']).to eq(valid_attributes[:title])
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  describe 'DELETE /movies/:id' do
    before { delete "/movies/#{movie_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
