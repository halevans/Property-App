class PagesController < ApplicationController
  # Forces rails to skips its own auth and instead run the divse api auth
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token, only: [:restricted]

  def home
  end

  def restricted
    devise_api_token = current_devise_api_token
    if devise_api_token
      render json: { message: "#{devise_api_token.resource_owner.email} logged in"}, status: :ok
    else
      render json: {message: "You are not logged in"}, status: :unauthorized
    end
  end
end
