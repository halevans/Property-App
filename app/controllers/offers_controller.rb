class OffersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :set_offer, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_devise_api_token!

  def index
    @offers = Offer.all

    render json: @offers
  end

  def show
    render json: @offer
  end

  def create
    @offer = Offer.new(offer_params)

    if @offer.save
      render json: @offer, status: :created, location: @offer
    else
      render json: @offer.errors, status: :unprocessable_entity
    end
  end

  def house_offers 
    @offers = Offer.where(house_id: params[:house_id])

    render json: @offers
  end

  def destroy
    @offer.destroy
    head :no_content
  end

  private 
  
  def set_offer
    @offer = Offer.find(params[:id])
  end

  def offer_params
    params.require(:offer).permit(:offer_price, :house_id, :user_id)
  end
end
