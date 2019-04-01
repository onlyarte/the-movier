Rails.application.routes.draw do
  resources :lists do
    resources :list_movies, path: 'movies'
  end

  resources :movies
  resources :users
end
