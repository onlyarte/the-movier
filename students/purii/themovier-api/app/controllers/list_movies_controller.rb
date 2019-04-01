class ListMoviesController < ApplicationController
  before_action :set_list
  before_action :set_list_movie, only: [:show, :update, :destroy]

  # GET /lists/:list_id/movies
  def index
    json_response(@list.movies)
  end

  # POST /lists/:list_id/movies
  def create
    @list.list_movies.create!(list_movie_params)
    head :no_content
  end

  # DELETE /lists/:list_id/movies/:id
  def destroy
    @list_movie.destroy
    head :no_content
  end

  private

  def list_movie_params
    # whitelist params
    params.permit(:movie_id)
  end

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_list_movie
    @list_movie = ListMovie.find_by!(list_id: params[:list_id], movie_id: params[:id])
  end
end
