class FollowsController < ApplicationController
  before_action :set_user
  before_action :set_follow, only: [:destroy]

  # GET /users/:user_id/followings
  def show_followings
    json_response(@user.followings)
  end

  # GET /users/:user_id/followers
  def show_followers
    json_response(@user.followers)
  end

  # POST /users/:user_id/followings
  def create
    @user.following_follows.create!({
      :following_id => params[:user_id],
      :followed_id => params[:followed_id]
    })
    head :no_content
  end

  # DELETE /users/:user_id/followings/:followed_id
  def destroy
    @follow.destroy
    head :no_content
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_follow
    @follow = Follow.find_by!(
      following_id: params[:user_id],
      followed_id: params[:followed_id]
    )
  end
end
