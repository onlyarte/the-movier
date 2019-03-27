Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  resources :courses
  root to: 'home#all_students'
  get '/hello', to: 'home#hello'
  get '/students', to: 'home#students'
  get '/all_students', to: 'home#all_students'
end
