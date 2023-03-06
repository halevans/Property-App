class HousesController < ApplicationController
  before_action :set_house, only: [:show, :edit, :update, :destroy]

  def index
    @houses = House.all

    render json: @houses
  end

  def show
    render json: @house
  end

  def create
    @house = House.new(params.require(:house).permit(:asking_price, :no_rooms, :img_url, :user_id))

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
end
