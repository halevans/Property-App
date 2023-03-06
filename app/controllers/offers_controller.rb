class OffersController < ApplicationController
  before_action :set_offer, only: [:show, :edit, :update, :destroy]

  def index
    @offers = Offer.all

    render json: @offers
  end

  def show
    render json: @offer
  end

  def create
    @offer = Offer.new(params.require(:offer).permit(:offer_price, :house_id, :user_id))

    if @offer.save
      render json: @offer, status: :created, location: @offer
    else
      render json: @offer.errors, status: :unprocessable_entity
    end
  end

  private 
  
  def set_offer
    @offer = Offer.find(params[:id])
  end
end
