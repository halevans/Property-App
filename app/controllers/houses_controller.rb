class HousesController < ApplicationController
  before_action :set_house, only: [:show, :edit, :update, :destroy]

  def index
    @houses = House.all

    render json: @houses
  end

  def show
    render json: @house
  end

  private 
  
  def set_house
    @house = House.find(params[:id])
  end
end
