class AuthController < ApplicationController
  # POST /auth/login
  def login
    @user = User.find_by!(username: params[:username]) or not_found
    if @user[:password] == params[:password]
      json_response(@user)
    else
      not_found
    end
  end

  # POST /auth/signup
  def signup
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  private

  def user_params
    # whitelist params
    params.permit(
      :email,
      :password,
      :username,
      :name,
      :is_super
    )
  end
end
