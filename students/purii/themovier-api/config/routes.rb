Rails.application.routes.draw do
  resources :movies

  resources :lists do
    resources :list_movies, path: 'movies'
  end

  resources :users do
    get 'followings', :to => 'follows#show_followings'
    get 'followers', :to => 'follows#show_followers'
    post 'followings', :to => 'follows#create'
    delete 'followings/:followed_id', :to => 'follows#destroy'
  end
end
