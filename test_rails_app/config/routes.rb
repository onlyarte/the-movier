Rails.application.routes.draw do
  get '/', to: 'home#index'
  get '/hello', to: 'home#hello'
  get '/students', to: 'home#students'
end
