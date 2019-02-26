require 'sinatra'

get('/hello') do
  erb :hello
end

post '/hello' do
  'Post hello!'
end

put '/hello' do
  
end

delete '/hello' do
  'deleting something...'
end

get /\/hello\/(\d+)/ do |num|
  "Number: #{num}"
end

get '/hello/:username' do
  erb :hello, locals: {username: params[:username]}
end
