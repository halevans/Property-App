class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_devise_api_token!

  def show
    render json: @user
  end

  private 

  def set_user
    @user = User.find(params[:id])
    puts "*******************************"
    puts current_user
    puts "*******************************"
  end
  
end
