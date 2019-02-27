class HomeController < ApplicationController
  def index
    render json: {ok: true, name: params[:name]}
  end

  def hello
    render text: "<h2>Hello, world!</h2>"
  end
end
