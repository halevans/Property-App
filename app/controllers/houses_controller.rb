class HousesController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :set_house, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_devise_api_token!

  def index
    @houses = House.all

    render json: @houses
  end

  def show
    render json: @house
  end

  def create
    @house = House.new(house_params)

    if @house.save
      render json: @house, status: :created, location: @house
    else
      render json: @house.errors, status: :unprocessable_entity
    end
  end

  private 
  
  def set_house
    @house = House.find(params[:id])
  end
  def house_params
    params.require(:house).permit(:asking_price, :no_rooms, :img_url, :user_id)
  end
end
