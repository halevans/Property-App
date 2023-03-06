class OffersController < ApplicationController
  before_action :set_offer, only: [:show, :edit, :update, :destroy]

  def index
    @offers = Offer.all

    render json: @offers
  end

  def show
    render json: @offer
  end

  private 
  
  def set_offer
    @offer = Offer.find(params[:id])
  end
end
