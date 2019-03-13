Rails.application.routes.draw do
  get '/', to: 'home#index'
  get '/hello', to: 'home#hello'
  get '/students', to: 'home#students'
  get '/all_students', to: 'home#all_students'
end
